export class Tasks {
    constructor(title, dueDate = null, description = "", priority = "normal") {
        this.title = title;
        this.dueDate = dueDate;
     
        this.priority = priority;
        this.completed = false;
    }
}


