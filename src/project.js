
let projects = [];

const addProject = (Project) => {
    Projects.push(Project);
}

const getProjects = () => Projects;

function createProject(name){

    // ID allows for duplicate named projects
    const ID = crypto.randomUUID();
    let todos = [];

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

    return{getName, setName, deleteProject, addTodo, getID};

}



export { createProject, getProjects, addProject };