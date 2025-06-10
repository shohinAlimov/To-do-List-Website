# 📝 Simple To-Do List

A clean, modern, and responsive to-do list application built with vanilla HTML, SCSS, and JavaScript. Features local storage persistence, task filtering, sorting, and a beautiful user interface.

## ✨ Features

- ➕ **Add Tasks** - Create new tasks with timestamps
- ✅ **Complete Tasks** - Mark tasks as done with checkbox
- ✏️ **Edit Tasks** - Inline editing with save/cancel options
- 🗑️ **Delete Tasks** - Remove unwanted tasks
- 🔍 **Filter Tasks** - View All, Pending, or Completed tasks
- 🔄 **Sort Tasks** - Sort by newest, oldest, alphabetical, or completion status
- 💾 **Persistent Storage** - Tasks saved to localStorage
- 📊 **Statistics** - Real-time task counters
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile
- 🎨 **Modern UI** - Clean design with smooth animations

## 🚀 Demo

[Live Demo](https://your-username.github.io/todo-list) *(Replace with your actual demo link)*

## 🛠️ Built With

- **HTML5** - Semantic markup
- **SCSS** - Modular stylesheets with variables and mixins
- **Vanilla JavaScript** - No frameworks, pure JS
- **localStorage** - Browser storage for persistence

## 📂 Project Structure

```
todo-list/
├── index.html                    # Main HTML file
├── style.css                     # Compiled CSS (generated from SCSS)
├── app.js                        # Main application entry point
├── 📂 styles/
│   ├── style.scss               # Main SCSS file (imports all partials)
│   ├── 📂 abstracts/
│   │   ├── _variables.scss      # SCSS variables
│   │   └── _mixins.scss         # SCSS mixins
│   ├── 📂 base/
│   │   ├── _reset.scss          # CSS reset
│   │   └── _base.scss           # Base styles
│   ├── 📂 components/
│   │   ├── _buttons.scss        # Button styles
│   │   ├── _forms.scss          # Form styles
│   │   └── _cards.scss          # Card components
│   ├── 📂 sections/
│   │   ├── _header.scss         # Header section
│   │   ├── _task-item.scss      # Task item component
│   │   └── _empty-state.scss    # Empty state
│   └── 📂 responsive/
│       └── _mobile.scss         # Mobile styles
├── 📂 utils/
│   ├── storage.js               # localStorage utilities
│   └── taskUtils.js             # Task manipulation functions
├── 📂 components/
│   ├── UIComponents.js          # DOM rendering components
│   └── TaskManager.js           # Main task management logic
└── README.md                    # Project documentation
```

## 🔧 Architecture

The project follows a modular architecture with separation of concerns:

### **Components**
- **TaskManager** - Main controller that coordinates all operations
- **UIComponents** - Handles DOM manipulation and rendering
- **StorageUtils** - Manages localStorage operations
- **TaskUtils** - Pure functions for task data manipulation

### **SCSS Organization**
- **Abstracts** - Variables, mixins, functions
- **Base** - Reset, typography, base styles
- **Components** - Reusable UI components
- **Sections** - Page-specific sections
- **Responsive** - Breakpoint-specific styles

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- SCSS compiler (optional, for development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/todo-list.git
   cd todo-list
   ```

2. **Open in browser**
   ```bash
   # Simply open index.html in your browser
   open index.html
   ```

3. **For SCSS development** (optional)
   ```bash
   # Install Sass globally
   npm install -g sass
   
   # Watch SCSS files for changes
   sass --watch styles/style.scss:style.css
   ```

### Quick Start

1. Open `index.html` in your web browser
2. Start adding tasks using the input field
3. Use filters and sorting to organize your tasks
4. Your tasks will be automatically saved and restored

## 📋 Usage

### Adding Tasks
- Type your task in the input field
- Press Enter or click "Add Task"
- Task will appear with current timestamp

### Managing Tasks
- **Complete**: Check the checkbox to mark as done
- **Edit**: Click "Edit" button, modify text, then "Save" or "Cancel"
- **Delete**: Click "Delete" button to remove task

### Filtering & Sorting
- **Filter**: Use "All", "Pending", "Completed" buttons
- **Sort**: Use dropdown to sort by date or alphabetically

## 🎨 Customization

### Colors
Edit `styles/abstracts/_variables.scss`:
```scss
$primary-color: #667eea;    // Change primary color
$danger-color: #dc3545;     // Change delete button color
$success-color: #28a745;    // Change complete button color
```

### Spacing
```scss
$spacing-lg: 20px;          // Adjust spacing scale
$border-radius-lg: 12px;    // Modify border radius
```

### Fonts
```scss
$font-size-base: 16px;      // Base font size
$font-weight-bold: 700;     // Font weights
```

## 🔧 API Reference

### TaskManager Methods
```javascript
TaskManager.addTask()           // Add new task
TaskManager.deleteTask(id)      // Delete task by ID
TaskManager.editTask(id)        // Start editing task
TaskManager.toggleComplete(id)  // Toggle completion status
TaskManager.setFilter(filter)   // Set active filter
TaskManager.sortTasks(type)     // Sort tasks
```

### TaskUtils Functions
```javascript
TaskUtils.createTask(id, text)           // Create task object
TaskUtils.filterTasks(tasks, filter)     // Filter task array
TaskUtils.sortTasks(tasks, sortType)     // Sort task array
TaskUtils.validateTaskText(text)         // Validate input
```

## 🌟 Features in Detail

### Local Storage Persistence
- Tasks automatically saved to browser localStorage
- Data persists between browser sessions
- No data loss on page refresh

### Responsive Design
- Mobile-first approach
- Flexible layouts for all screen sizes
- Touch-friendly interface

### Accessibility
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create your feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Development Guidelines
- Follow existing code style
- Add comments for complex logic
- Test on multiple browsers
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Shohin ALimov**
- GitHub: [@shohinAlimov]([https://github.com/your-username](https://github.com/shohinAlimov))
- LinkedIn: [Shohin Alimov](www.linkedin.com/in/shohin-alimov-05705124b)
- Email: shohinalimov2008@gmail.com

## 🙏 Acknowledgments

- Design inspiration from modern task management apps
- Color palette inspired by modern UI design trends
- Built with modern web standards and best practices

⭐ **Star this repository if you found it helpful!**
