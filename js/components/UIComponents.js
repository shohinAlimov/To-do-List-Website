// UI Components for rendering and DOM manipulation

const UIComponents = {
  // Create HTML for a single task
  createTaskHTML(task) {
    const date = task.date.toLocaleDateString();
    const time = task.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return `
      <li class="task-item ${task.completed ? 'task-item--completed' : ''}" data-task-id="${task.id}">
        <input 
          type="checkbox" 
          class="task-item__checkbox" 
          ${task.completed ? 'checked' : ''}
          onchange="TaskManager.toggleComplete(${task.id})"
        >
        <div class="task-item__content">
          <span class="task-item__text">${this.escapeHtml(task.text)}</span>
          <span class="task-item__date">${date} at ${time}</span>
        </div>
        <div class="task-item__actions">
          <button class="task-item__btn task-item__btn--edit" onclick="TaskManager.editTask(${task.id})">Edit</button>
          <button class="task-item__btn task-item__btn--delete" onclick="TaskManager.deleteTask(${task.id})">Delete</button>
        </div>
      </li>
    `;
  },

  // Create edit mode HTML for a task
  createEditTaskHTML(taskId, currentText) {
    return {
      textHTML: `<input type="text" class="task-item__input" value="${this.escapeHtml(currentText)}">`,
      actionsHTML: `
        <button class="task-item__btn task-item__btn--save" onclick="TaskManager.saveTask(${taskId})">Save</button>
        <button class="task-item__btn task-item__btn--cancel" onclick="TaskManager.cancelEdit(${taskId}, '${this.escapeHtml(currentText)}')">Cancel</button>
      `
    };
  },

  // Create normal mode HTML for task actions
  createNormalTaskActionsHTML(taskId) {
    return `
      <button class="task-item__btn task-item__btn--edit" onclick="TaskManager.editTask(${taskId})">Edit</button>
      <button class="task-item__btn task-item__btn--delete" onclick="TaskManager.deleteTask(${taskId})">Delete</button>
    `;
  },

  // Escape HTML to prevent XSS
  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  },

  // Update statistics display
  updateStatsDisplay(stats) {
    const totalTasks = document.getElementById('totalTasks');
    const pendingTasks = document.getElementById('pendingTasks');
    const completedTasks = document.getElementById('completedTasks');

    if (totalTasks) totalTasks.textContent = stats.total;
    if (pendingTasks) pendingTasks.textContent = stats.pending;
    if (completedTasks) completedTasks.textContent = stats.completed;
  },

  // Show/hide empty state
  toggleEmptyState(show) {
    const emptyState = document.getElementById('emptyState');
    const taskList = document.getElementById('taskList');

    if (emptyState && taskList) {
      if (show) {
        emptyState.classList.remove('hidden');
        taskList.classList.add('hidden');
      } else {
        emptyState.classList.add('hidden');
        taskList.classList.remove('hidden');
      }
    }
  },

  // Render all tasks to the DOM
  renderTasks(tasks) {
    const taskList = document.getElementById('taskList');

    if (!taskList) return;

    // Clear existing tasks
    taskList.innerHTML = '';

    // Show empty state if no tasks
    if (tasks.length === 0) {
      this.toggleEmptyState(true);
      return;
    }

    // Hide empty state and show tasks
    this.toggleEmptyState(false);

    // Add tasks to the list
    tasks.forEach(task => {
      taskList.innerHTML += this.createTaskHTML(task);
    });
  },

  // Update filter button states
  updateFilterButtons(activeFilter) {
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
      btn.classList.remove('filter-btn--active');
      if (btn.dataset.filter === activeFilter) {
        btn.classList.add('filter-btn--active');
      }
    });
  },

  // Show alert message
  showAlert(message, type = 'info') {
    // Simple alert for now, can be enhanced with custom modals
    alert(message);
  },

  // Get task item element by ID
  getTaskElement(taskId) {
    return document.querySelector(`[data-task-id="${taskId}"]`);
  },

  // Focus and select input field
  focusAndSelectInput(input) {
    if (input) {
      input.focus();
      input.select();
    }
  }
};