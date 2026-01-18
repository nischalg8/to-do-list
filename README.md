# To-Do List Application

A clean and intuitive task management application built with vanilla JavaScript, HTML, and CSS.

## Features

### Project Management
- Create multiple projects with titles and descriptions
- View all projects in an organized sidebar
- Switch between projects with a single click
- Active project highlighting for easy navigation

### Task Management
- Add tasks to any project with title, due date, and priority level
- Three priority levels: Low (green), Medium (yellow), and High (red)
- Visual priority indicators on each task
- Mark tasks as completed with a checkbox
- Delete tasks individually
- Completed tasks are visually distinct with strikethrough styling

### User Interface
- Clean, modern design with a responsive layout
- Sidebar navigation for quick project access
- Easy-to-use forms with close buttons
- Smooth transitions and hover effects
- Color-coded priority system

## File Structure

```
project/
├── index.html
├── styles/
│   └── styles.css
└── scripts/
    ├── index.js
    ├── projects.js
    ├── tasks.js
    ├── setupProjectForm.js
    └── renderProjects.js
```

## Getting Started

1. Open `index.html` in a web browser
2. Click "Add a project" to create your first project
3. Fill in the project title and description
4. Click "Add" to save the project
5. Select your project from the sidebar
6. Use the "+ Add Task" button to create tasks

## Usage

### Creating a Project
1. Click the "Add a project" button in the main area
2. Enter a project title (required)
3. Enter a project description (optional)
4. Click "Add" or press the close button to cancel

### Adding Tasks
1. Select a project from the sidebar
2. Click the "+ Add Task" button
3. Enter task title (required)
4. Select a due date (required)
5. Choose a priority level (Low, Medium, or High)
6. Click "Add" to create the task

### Managing Tasks
- Click the checkbox to mark a task as complete
- Click the red X button to delete a task
- Completed tasks show a "Done" label and are styled differently

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- No external libraries or frameworks

## Browser Compatibility

Works best in modern browsers that support ES6+ features:
- Chrome
- Firefox
- Safari
- Edge

## Future Enhancements

Potential features for future versions:
- Local storage persistence
- Task editing capabilities
- Project deletion
- Search and filter functionality
- Today and Upcoming views
- Drag and drop task reordering
- Export/import functionality

## License

This project is open source and available for personal and educational use.