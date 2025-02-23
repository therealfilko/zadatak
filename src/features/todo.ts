interface todo {
    id: number;
    name: string;
    status: string;
};

// Das kommt in TaskList
function addTask(name:string) {
    return name;
}

// Das kommt in Task
function editTask(id:string) {
    return id;
}

// Das kommt in Task
function finishTask(id:string) {
    return id;
}

// Das kommt in Task
function deleteTask(id:string) {
    return id;
}
