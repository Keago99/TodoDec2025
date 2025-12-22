function createProject(name, id = null){

    // ID allows for duplicate named projects
    const ID = id || crypto.randomUUID();
    let todos = [];

    const getTodos = () => todos;

    const getName = () => name;
    const setName = (newName) => {
        name = newName;
    }

    const getID = () => ID;

    const deleteProject = (ID) =>{
        const index = todos.findIndex(todo => todo.ID === ID);
        todos.splice(index,1); // at index, remove 1 thing being that index
    }

    const addTodo = (todo) =>{
        todos.push(todo);
    }

    return{getName, setName, deleteProject, addTodo, getID, getTodos};

}



export { createProject };