// Storage utility functions for localStorage operations

const StorageUtils = {
  // Save tasks to localStorage
  saveTasks(tasks) {
    try {
      localStorage.setItem('todoTasks', JSON.stringify(tasks));
      return true;
    } catch (error) {
      console.error('Error saving tasks:', error);
      return false;
    }
  },

  // Load tasks from localStorage
  loadTasks() {
    try {
      const savedTasks = localStorage.getItem('todoTasks');
      if (savedTasks) {
        const tasks = JSON.parse(savedTasks);
        // Convert date strings back to Date objects
        tasks.forEach(task => {
          task.date = new Date(task.date);
        });
        return tasks;
      }
      return [];
    } catch (error) {
      console.error('Error loading tasks:', error);
      return [];
    }
  },

  // Save task ID counter
  saveTaskCounter(counter) {
    try {
      localStorage.setItem('taskIdCounter', counter.toString());
      return true;
    } catch (error) {
      console.error('Error saving task counter:', error);
      return false;
    }
  },

  // Load task ID counter
  loadTaskCounter() {
    try {
      const savedCounter = localStorage.getItem('taskIdCounter');
      return savedCounter ? parseInt(savedCounter) : 1;
    } catch (error) {
      console.error('Error loading task counter:', error);
      return 1;
    }
  },

  // Clear all stored data
  clearStorage() {
    try {
      localStorage.removeItem('todoTasks');
      localStorage.removeItem('taskIdCounter');
      return true;
    } catch (error) {
      console.error('Error clearing storage:', error);
      return false;
    }
  }
};