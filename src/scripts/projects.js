import {Tasks} from "./tasks.js";

let projectsList =  [];//later in persistent storage
class Project {
    constructor(title, description) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.description = description;
        this.createdAt = new Date();
        this.tasks = [];
    }
    addTask(task) {
        if (task instanceof Tasks) {
            this.tasks.push(task);
        } else {
            console.error("This does not fit the task class!");
        }
    }
    removeTask(taskID) {
        this.tasks.splice(taskID, 1);
    }

    getTask() {
        return this.tasks;
    }
}

function addProjectToList(project){
    projectsList.push(project)
}

export {projectsList, addProjectToList, Project};