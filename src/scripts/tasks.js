export class Tasks {
    constructor(title, dueDate = null, description = "", priority = "normal") {
        this.title = title;
        this.dueDate = dueDate;
        this.description = description;
        this.priority = priority;
        this.completed = false;
    }

    toggleComplete() {
        this.completed = !this.completed;
    }
}
