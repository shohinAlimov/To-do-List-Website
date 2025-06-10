// Main application entry point

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  // Initialize the task manager
  TaskManager.init();

  console.log('Todo App initialized successfully!');

  // Optional: Add some debugging helpers in development
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    // Make components globally available for debugging
    window.TaskManager = TaskManager;
    window.TaskUtils = TaskUtils;
    window.StorageUtils = StorageUtils;
    window.UIComponents = UIComponents;

    console.log('Debug mode: Components available globally');
  }
});