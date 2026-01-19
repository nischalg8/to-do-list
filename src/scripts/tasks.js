export class Tasks {
    constructor(title, dueDate = null, priority) {
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = false;
    }
}


