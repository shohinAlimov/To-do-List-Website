// Task utility functions for data manipulation

const TaskUtils = {
  // Create a new task object
  createTask(id, text) {
    return {
      id: id,
      text: text.trim(),
      completed: false,
      date: new Date()
    };
  },

  // Filter tasks based on status
  filterTasks(tasks, filter) {
    switch (filter) {
      case 'pending':
        return tasks.filter(task => !task.completed);
      case 'completed':
        return tasks.filter(task => task.completed);
      case 'all':
      default:
        return tasks;
    }
  },

  // Sort tasks based on criteria
  sortTasks(tasks, sortType) {
    const sortedTasks = [...tasks]; // Create a copy to avoid mutating original

    switch (sortType) {
      case 'newest':
        return sortedTasks.sort((a, b) => new Date(b.date) - new Date(a.date));
      case 'oldest':
        return sortedTasks.sort((a, b) => new Date(a.date) - new Date(b.date));
      case 'alphabetical':
        return sortedTasks.sort((a, b) => a.text.toLowerCase().localeCompare(b.text.toLowerCase()));
      case 'completed':
        return sortedTasks.sort((a, b) => a.completed - b.completed);
      default:
        return sortedTasks;
    }
  },

  // Find task by ID
  findTaskById(tasks, taskId) {
    return tasks.find(task => task.id === taskId);
  },

  // Update task text
  updateTaskText(tasks, taskId, newText) {
    const task = this.findTaskById(tasks, taskId);
    if (task) {
      task.text = newText.trim();
      return true;
    }
    return false;
  },

  // Toggle task completion status
  toggleTaskCompletion(tasks, taskId) {
    const task = this.findTaskById(tasks, taskId);
    if (task) {
      task.completed = !task.completed;
      return true;
    }
    return false;
  },

  // Remove task by ID
  removeTask(tasks, taskId) {
    const index = tasks.findIndex(task => task.id === taskId);
    if (index !== -1) {
      tasks.splice(index, 1);
      return true;
    }
    return false;
  },

  // Get task statistics
  getTaskStats(tasks) {
    const total = tasks.length;
    const pending = tasks.filter(task => !task.completed).length;
    const completed = tasks.filter(task => task.completed).length;

    return {
      total,
      pending,
      completed
    };
  },

  // Validate task text
  validateTaskText(text) {
    const trimmed = text.trim();
    return {
      isValid: trimmed.length > 0,
      text: trimmed,
      error: trimmed.length === 0 ? 'Task cannot be empty!' : null
    };
  }
};