import { projectsList } from "./projects.js";
import { getActiveProject, setActiveProject } from "./index.js";
import { Tasks } from "./tasks.js";

function dateFormatter(date) {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

function setupAddTaskBtn(project, projectDetailsContainer) {
     // avoid multiple clicks

     if (projectDetailsContainer.querySelector(".add-task-btn")) return;

    const addTaskBtn = document.createElement("button");
    addTaskBtn.classList.add("add-task-btn");
    addTaskBtn.textContent = "+ Add Task";

    addTaskBtn.addEventListener("click", () => {
        if (projectDetailsContainer.querySelector(".add-task-form")) return;
           
        const addTaskForm = document.createElement("div");
        addTaskForm.classList.add("add-task-form");

        addTaskForm.innerHTML = `
              
            <input type="text" class="task-input-title" placeholder="Task title" required/>
            <input type="date" class="task-input-date" required/>
            <select class="task-input-priority">
                <option value="low">Low</option>
                <option value="medium" selected>Medium</option>
                <option value="high">High</option>
            </select>
            <button class="add-task-confirm">Add</button>
            `;
        addTaskForm.querySelector(".add-task-confirm").addEventListener("click", () => {
                const title = addTaskForm.querySelector(".task-input-title").value;
            const dueDate = new Date(addTaskForm.querySelector(".task-input-date").value);
            const priority = addTaskForm.querySelector(".task-input-priority").value;

            if (!title || !dueDate) return; // simple validation

            const newTask = new Tasks(title, dueDate, priority);
            project.tasks.push(newTask);
            renderActiveProject();
            });
         projectDetailsContainer.appendChild(addTaskForm);
        
    });
   
    projectDetailsContainer.appendChild(addTaskBtn);
}

function taskCompletedLabel(task, taskDiv) {

    // if completed shows label 
    if (task.completed) {
        taskDiv.classList.add("completed");
        const completedLabel = document.createElement("span");

        completedLabel.classList.add("task-status");
        completedLabel.textContent = "Done";

        taskDiv.appendChild(completedLabel);
    } else { // else checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("task-completed-checkbox");
        
        if (task.priority) {
            const priority = document.createElement('div');
            priority.classList.add(`priority-${task.priority}`);
            taskDiv.append(priority);
        }
     
        checkbox.addEventListener("change", () => {
            task.completed = true;
            renderActiveProject();
        });
        taskDiv.prepend(checkbox);
    }
}

function displayTaskList(project, projectDetailsContainer) {
    const tasksList = document.createElement("div");
    tasksList.classList.add("tasks-list");
    
   // task list is displayed

    project.tasks.forEach((task, index) => {
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task");

      
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-task-btn");
        deleteBtn.textContent = "✖"; ///// image

        
        const title = document.createElement("span");
        title.classList.add("task-title");
        title.textContent = task.title;

        const dueDate = document.createElement("span");
        dueDate.classList.add("task-due-date");
        dueDate.textContent = `Due: ${dateFormatter(task.dueDate)}`;

        taskDiv.append(deleteBtn, title, dueDate);
        
        taskCompletedLabel(task, taskDiv);   //either checkbox if not completed or completed label 
        
       

        deleteBtn.addEventListener("click", () => {
            project.tasks.splice(index, 1);
            renderActiveProject();
        });

         tasksList.appendChild(taskDiv);
    });
       
    projectDetailsContainer.appendChild(tasksList);
    
}


export function renderAllProjects() {
    const projectsListHtml = document.querySelector(".sidebar__projects-list");

    if (!projectsListHtml) {
        console.error("Project List not found!");
        return;
    }
    projectsListHtml.innerHTML = "";

    projectsList.forEach((project) => {
        const li = document.createElement("li");
        li.dataset.id = project.id;
        li.classList.add("project");

        li.innerHTML = `${project.title}`;
        projectsListHtml.appendChild(li);
    });

    projectsListHtml.addEventListener("click", (e) => {
        const selectedProject = e.target.closest(".project");
        if (selectedProject) {
            setActiveProject(selectedProject.dataset.id);
            renderActiveProject();
        }
    });
}

export function renderActiveProject() {
    const activeProjectID = getActiveProject();

    if (!activeProjectID) return;

    const activeProject = projectsList.find(
        (project) => activeProjectID === project.id,
    );
    if (!activeProject) return;

    const activeProjectDetails = document.querySelector(
        ".main__active-project",
    );
    if (!activeProjectDetails) return;

    activeProjectDetails.innerHTML = `

        <h1 class='project-title'>${activeProject.title}</h1>
        <p class='project-desc'>${activeProject.description}</p>
        <p class='project-date'>
           Created At: ${dateFormatter(activeProject.createdAt)}
        </p>
    `;
    
    displayTaskList(activeProject, activeProjectDetails);
    setupAddTaskBtn(activeProject, activeProjectDetails);
}



