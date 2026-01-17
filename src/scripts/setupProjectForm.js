import { Project, addProjectToList } from "./projects.js";
function setupProjectForm() {
    const projectsView = document.querySelector(".projects-view");
    const openFormBtn = document.querySelector(".projects-view__add-project");

    const projectForm = createProjectForm();
    projectsView.appendChild(projectForm);

    const closeFormBtn = projectForm.querySelector(".project-form__close");

    function showForm() {
        projectForm.classList.remove("hidden");
        openFormBtn.classList.add("hidden");
    }
    function hideForm() {
        projectForm.classList.add("hidden");
        openFormBtn.classList.remove("hidden");
        projectForm.reset();
    }
    projectForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(projectForm);
        const newProject = new Project(
            formData.get("title"),
            formData.get("description")
        );
        addProjectToList(newProject);
        hideForm();
    });

    openFormBtn.addEventListener("click", showForm);

    closeFormBtn.addEventListener("click", hideForm);
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

export { setupProjectForm };
