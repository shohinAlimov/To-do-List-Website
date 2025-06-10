// Task Manager - Main component for task operations

const TaskManager = {
  // State
  tasks: [],
  currentFilter: 'all',
  taskIdCounter: 1,

  // Initialize the task manager
  init() {
    this.loadFromStorage();
    this.setupEventListeners();
    this.updateDisplay();
  },

  // Load data from localStorage
  loadFromStorage() {
    this.tasks = StorageUtils.loadTasks();
    this.taskIdCounter = StorageUtils.loadTaskCounter();
  },

  // Save data to localStorage
  saveToStorage() {
    StorageUtils.saveTasks(this.tasks);
    StorageUtils.saveTaskCounter(this.taskIdCounter);
  },

  // Setup event listeners
  setupEventListeners() {
    // Add task button and Enter key
    const addBtn = document.getElementById('addBtn');
    const taskInput = document.getElementById('taskInput');

    if (addBtn) {
      addBtn.addEventListener('click', () => this.addTask());
    }

    if (taskInput) {
      taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          this.addTask();
        }
      });
    }

    // Filter buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        this.setFilter(btn.dataset.filter);
      });
    });

    // Sort select
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        this.sortTasks(e.target.value);
      });
    }
  },

  // Add new task
  addTask() {
    const taskInput = document.getElementById('taskInput');
    if (!taskInput) return;

    const validation = TaskUtils.validateTaskText(taskInput.value);

    if (!validation.isValid) {
      UIComponents.showAlert(validation.error);
      return;
    }

    const newTask = TaskUtils.createTask(this.taskIdCounter++, validation.text);
    this.tasks.push(newTask);

    taskInput.value = '';
    this.saveToStorage();
    this.updateDisplay();
  },

  // Delete task
  deleteTask(taskId) {
    const success = TaskUtils.removeTask(this.tasks, taskId);
    if (success) {
      this.saveToStorage();
      this.updateDisplay();
    }
  },

  // Toggle task completion
  toggleComplete(taskId) {
    const success = TaskUtils.toggleTaskCompletion(this.tasks, taskId);
    if (success) {
      this.saveToStorage();
      this.updateDisplay();
    }
  },

  // Start editing a task
  editTask(taskId) {
    const taskElement = UIComponents.getTaskElement(taskId);
    if (!taskElement) return;

    const textElement = taskElement.querySelector('.task-item__text');
    const actionsElement = taskElement.querySelector('.task-item__actions');

    if (!textElement || !actionsElement) return;

    const currentText = textElement.textContent;
    const editHTML = UIComponents.createEditTaskHTML(taskId, currentText);

    // Switch to edit mode
    textElement.innerHTML = editHTML.textHTML;
    actionsElement.innerHTML = editHTML.actionsHTML;

    // Focus the input
    const input = textElement.querySelector('.task-item__input');
    UIComponents.focusAndSelectInput(input);
  },

  // Save edited task
  saveTask(taskId) {
    const taskElement = UIComponents.getTaskElement(taskId);
    if (!taskElement) return;

    const input = taskElement.querySelector('.task-item__input');
    if (!input) return;

    const validation = TaskUtils.validateTaskText(input.value);

    if (!validation.isValid) {
      UIComponents.showAlert(validation.error);
      return;
    }

    const success = TaskUtils.updateTaskText(this.tasks, taskId, validation.text);
    if (success) {
      this.saveToStorage();
      this.updateDisplay();
    }
  },

  // Cancel editing
  cancelEdit(taskId, originalText) {
    const taskElement = UIComponents.getTaskElement(taskId);
    if (!taskElement) return;

    const textElement = taskElement.querySelector('.task-item__text');
    const actionsElement = taskElement.querySelector('.task-item__actions');

    if (!textElement || !actionsElement) return;

    // Restore original content
    textElement.innerHTML = UIComponents.escapeHtml(originalText);
    actionsElement.innerHTML = UIComponents.createNormalTaskActionsHTML(taskId);
  },

  // Set filter
  setFilter(filter) {
    this.currentFilter = filter;
    UIComponents.updateFilterButtons(filter);
    this.updateDisplay();
  },

  // Sort tasks
  sortTasks(sortType) {
    this.tasks = TaskUtils.sortTasks(this.tasks, sortType);
    this.saveToStorage();
    this.updateDisplay();
  },

  // Update the entire display
  updateDisplay() {
    // Get filtered tasks
    const filteredTasks = TaskUtils.filterTasks(this.tasks, this.currentFilter);

    // Render tasks
    UIComponents.renderTasks(filteredTasks);

    // Update statistics
    const stats = TaskUtils.getTaskStats(this.tasks);
    UIComponents.updateStatsDisplay(stats);
  },

  // Clear all tasks (utility method)
  clearAllTasks() {
    if (confirm('Are you sure you want to delete all tasks?')) {
      this.tasks = [];
      this.taskIdCounter = 1;
      this.saveToStorage();
      this.updateDisplay();
    }
  },

  // Export tasks (utility method)
  exportTasks() {
    const dataStr = JSON.stringify(this.tasks, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'todo-tasks.json';
    link.click();

    URL.revokeObjectURL(url);
  }
};