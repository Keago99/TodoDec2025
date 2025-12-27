//used to controll everything that requires setup with displays, including the creation of new html elements
import { createProject } from "./project.js";
import { deleteProject, storeProjects, loadProjects } from "./localStorage.js";

// Used in multiple funcitons, moved to top of file
const todoDialog = document.querySelector("#addTodoDialog");
const projectArea = document.querySelector(".projectArea");



// Creates the project HTML element (singular)
const createProjectDiv = (project) => {
    return`
    <div class="Project">
        <h1>${project.getName()}</h1>
        <div class="todoArea" data-project-id="${project.getID()}">
            <br>
        </div>
        <div class="buttonDiv">
            <button type="button" class="addTodoButton"> Add Task! </button>
            <button type="button" class="deleteProjectButton" data-project-id = ${project.getID()}> Delete Project </button>
        <div>
    </div>
     `
}

// A forEach that runs this previous method over all projects by using the "getProject"


// Renders the created HTML project element in its correct place (singular)
const renderProject = (project) => {
    const projectDiv = createProjectDiv(project)
    projectArea.innerHTML += projectDiv;
}

const renderAllProjects = (projectArray) => {
    projectArea.innerHTML = "";
    projectArray.forEach(project => {
        renderProject(project);
    });
}



const addTodoDialogOpen = () => {
    todoDialog.showModal();
}

// Selects all Todo add task buttons and assigns them the task of opening the modal.
const addTodoDialogEvents = () => {
    const todoButtons = document.querySelectorAll(".addTodoButton");
    const addTodoDialog = document.querySelector("#addTodoDialog");

    todoButtons.forEach(button => {
        button.addEventListener("click", function(){
            addTodoDialog.showModal();
        });
    });
}

const addDeleteProjectEvents = () => {
    const deleteProjectButtons = document.querySelectorAll(".deleteProjectButton");

    deleteProjectButtons.forEach(button => {
        button.addEventListener("click", function(){
            deleteProject(this.dataset.projectid);
            RenderAll();
        });
    });
}

const addProjectDialogOpenEvent = () => {
    const projectDialog = document.querySelector("#addProjectDialog");
    const addProjectButton = document.querySelector("#addProjectButton");

    addProjectButton.addEventListener("click", function(){
        projectDialog.showModal();
    });
};

const closeTodoDialogEvent = () =>{
    const closeTodoDialogButton = document.querySelector("#closeTodoDialogButton");

    closeTodoDialogButton.addEventListener("click", function(){
        todoDialog.close();
    })
}

//Create a composite function that renders all projects and then adds all events to each project
const  RenderAll = () => {
    let loadedProjects = loadProjects();
    renderAllProjects(loadedProjects);
    addTodoDialogEvents();
    addDeleteProjectEvents();
}


export { createProjectDiv, renderProject, addTodoDialogEvents, addProjectDialogOpenEvent,closeTodoDialogEvent, renderAllProjects, addDeleteProjectEvents}; 


// I want to turn projects into stringify, then I want to load projects after turning the string back into array