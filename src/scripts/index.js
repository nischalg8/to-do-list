import "../styles/styles.css";
import { setupProjectForm, showForm, getProjectForm} from "./setupProjectForm.js";
import { renderActiveProject, renderAllProjects } from "./renderProjects.js";

document.addEventListener("DOMContentLoaded", () => {
    setupProjectForm();
    renderAllProjects();
    renderActiveProject();
});
export let activeProjectID = null;
export function setActiveProject(id) {
    activeProjectID = id;
}

export function getActiveProject() {
    return activeProjectID;
}

const addProjectBtn = document.querySelector(".main__add-project");
addProjectBtn.addEventListener("click", ()=> {
        showForm(getProjectForm(), addProjectBtn);
});
