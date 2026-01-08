// File dedicated to all persistance logic using localStorage mainly.
import { createProject } from "./project.js"
import { createTodo } from "./todo.js";

// stores the project Array in JSON file
const storeProjects = (savedProject) => {   
    const dataToSave = savedProject.map(project => ({
        name: project.getName(),
        ID: project.getID(),
        todos: project.getTodos().map(todo => ({
            title: todo.getTitle(),
            description: todo.getDescription(),
            dueDate: todo.getDueDate(),
            priority: todo.getPriority(),
            ID: todo.getID()
        }))
    }));

    //Take projects array and set it as a json file
     localStorage.setItem("localProjects", JSON.stringify(dataToSave));
};

// loads the project array from localStorage
const loadProjects = () => {
    const jsonString = localStorage.getItem("localProjects");

    // If the Json string is empty return an empty Array
    if (!jsonString){
        console.log("returned an empty array in loadProjects");
        return [];
    }

    // parse the project data

    const projectsData = JSON.parse(jsonString);
    
    //reconstruct the projects
    const reconstructedProjects = projectsData.map(projectData => {

        const project = createProject(projectData.name, projectData.ID);

        //restore todos in said project, with .? being optional chaining for safety
        projectData.todos?.forEach(savedTodo => {
            const newTodo = createTodo(
                savedTodo.title,
                savedTodo.description,
                savedTodo.dueDate,
                savedTodo.priority,
                savedTodo.ID
            )
            project.addTodo(newTodo);
        });
        

        return project;
    });

    return reconstructedProjects;
}

const deleteProject = (projectToDeleteID) =>{
    //loads the project
    let projectArray = loadProjects();

    //filters the array for the found ID
    const foundIndex = projectArray.findIndex(element => element.getID() === projectToDeleteID);

    console.log(foundIndex);
    //removes it from the array
    projectArray.splice(foundIndex, 1);

    //restores the stored Array
    storeProjects(projectArray);
}

const addNewProject = (projectName) => {


    let projectArray = loadProjects();

    const newProject = createProject(projectName);

    projectArray.push(newProject);

    storeProjects(projectArray);
}


const deleteTodo = (todoID) => {
        const projects = loadProjects();
        for (let project of projects){
            const todos = project.getTodos();
            const todoIndex = todos.findIndex(todo => todo.getID() === todoID);
            if (todoIndex !== -1){
                todos.splice(todoIndex, 1);
                storeProjects(projects);
                return;
            }
        }
        console.log("project not found");
        return null;
}

export { storeProjects, loadProjects, deleteProject, addNewProject, deleteTodo};
