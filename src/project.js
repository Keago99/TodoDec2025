

function createProject(name){

    // ID allows for duplicate named projects
    const ID = crypto.randomUUID();
    let todos = [];

    const deleteProject = (ID) =>{
        const index = todos.findIndex(todo => todo.ID === ID);
        todos.splice(index,1); // at index, remove 1 thing being that index
    }

    return{deleteProject}

}