import { Project, addProjectToList } from "./projects.js";
import { renderAllProjects } from "./renderProjects.js";

// to later export it to index.js 
let projectForm = null;

function showForm(projectForm, addProjectBtn) {
    projectForm.classList.remove("hidden");
    addProjectBtn.classList.add("hidden");
}

function hideForm(projectForm, addProjectBtn) {
    projectForm.classList.add("hidden");
    addProjectBtn.classList.remove("hidden");
    projectForm.reset();
}

function setupProjectForm() {
    const projectFormContainer = document.querySelector(".main__project-form");
   
    projectForm = createProjectForm();
    projectFormContainer.appendChild(projectForm);

    const removeFormBtn = projectForm.querySelector(".project-form__close");

    projectForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(projectForm);
        const newProject = new Project(
            formData.get("title"),
            formData.get("description"),
        );

        addProjectToList(newProject);
        renderAllProjects();
        projectForm.reset();
    });

    removeFormBtn.addEventListener("click", () => {
        hideForm(projectForm, addProjectBtn);
    });
    
}
function createProjectForm() {
    const form = document.createElement("form");
    form.classList.add("project-form", "hidden");

    form.innerHTML = `
        <label>
            Title
            <input type="text" name="title" placeholder="Project name..." required />
        </label>

        <label>
            Description
            <input type="text" name="description" placeholder="Project description..." />
        </label>

       
        <button type="button" class="project-form__close">✕</button>
        <button type="submit" class="project-form__submit">Add</button>
     
    `;

    return form;
}

//form getter for index.js
function getProjectForm()
{
    return projectForm;
}
export { setupProjectForm, showForm, getProjectForm };
