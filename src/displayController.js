//used to controll everything that requires setup with displays, including the creation of new html elements
import { createProject } from "./project.js"
import { getProjects } from "./project.js"

// Used in multiple funcitons, moved to top of file
const todoDialog = document.querySelector("#addTodoDialog");

// Creates the project HTML element (singular)
const createProjectDiv = (Project) => {
    return`
    <div class="Project">
        <h1>${Project.getName()}</h1>
        <div class="todoArea" data-project-id="${Project.getID()}">
            <br>
        </div>
        <div class="buttonDiv">
            <button type="button" class="addTodoButton"> Add Task! </button>
        <div>
    </div>
     `
}

// A forEach that runs this previous method over all projects by using the "getProject"


// Renders the created HTML project element in its correct place (singular)
const renderProject = (project) => {
    const projectArea = document.querySelector(".projectArea");
    const projectDiv = createProjectDiv(project)
    projectArea.innerHTML += projectDiv;
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


export { createProjectDiv, renderProject, addTodoDialogEvents, addProjectDialogOpenEvent,closeTodoDialogEvent }; 