//used to controll everything that requires setup with displays, including the creation of new html elements
import { createProject } from "./project.js";
import { createTodo } from "./todo.js";
import { deleteProject, storeProjects, loadProjects, addNewProject } from "./localStorage.js";

// Used in multiple funcitons, moved to top of file
const todoDialog = document.querySelector("#addTodoDialog");
const addProjectDialog = document.querySelector("#addProjectDialog");
const projectArea = document.querySelector(".projectArea");



// Creates the project HTML element (singular)
const createProjectDiv = (project) => {
    const projectString = `
        <h2>${project.getName()}</h2>
        <div class="todoArea" data-projectid="${project.getID()}">
        </div>
        <div class="buttonDiv">
            <button type="button" class="addTodoButton"> Add Task! </button>
            <button type="button" class="deleteProjectButton" data-projectid = ${project.getID()}> Delete Project </button>
        <div>
     `;

     const div = document.createElement("div");
     div.className = "Project";
     div.innerHTML = projectString.trim();

     return div;
}

const createTodoDiv = (todo) => {
    const todoString = `
    <h3>${todo.getTitle()}</h3>
    <div class="todoDescription">
    <p>${todo.getDescription()}<p>
    <p>${todo.getDueDate()}<p>

    </div>
    `

    const div  = document.createElement("div");
    div.className = "insideProjectTodo";
    div.innerHTML = todoString.trim();

    return div;
}

// render the todo within the project (project ID needed)
const renderTodos = (projectArray) => {
    const todoAreas = document.querySelectorAll(".todoArea");

    todoAreas.forEach(todoArea =>{
        const projectID = todoArea.dataset.projectid;

        const project = projectArray.find(project => project.getID() === projectID);

        const todos = project.getTodos();

        if (!todos || todos.length === 0) {
            console.log("todos empty for this one");
            return;
        }

        todos.forEach(todo => {
            const todoDiv = createTodoDiv(todo);
            todoArea.appendChild(todoDiv);
        });
    });
}

// Renders the created HTML project element in its correct place (singular)
const renderProject = (project) => {
    const projectDiv = createProjectDiv(project);
    
    projectArea.appendChild(projectDiv);
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
            console.log("Button dataset:", this.dataset);
            console.log("projectid value:", this.dataset.projectid);
            console.log("Type of projectid:", typeof this.dataset.projectid);

            const projectId = this.dataset.projectid;
            console.log("Passing to deleteProject:", projectId);
            deleteProject(this.dataset.projectid);
            renderAll();
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

const addProjectWithinDialog = () => {
    const projectNameInput = document.querySelector('#projectName');
    const value = projectNameInput.value.trim();    
    
    
    if(!value){
        alert("Please enter a project name!");
        return;
    }

    addNewProject(value);
    addProjectDialog.close();
    projectNameInput.value = '';
    renderAll();

}

const addProjectWithinDialogEvent = () => {
    const addProjectDialogButton = document.querySelector("#addProjectDialogButton");

    addProjectDialogButton.addEventListener("click", addProjectWithinDialog);
};

const closeProjectAddEvent = () => {
    const closeProjectAddButton = document.querySelector("#closeProjectDialog");

    closeProjectAddButton.addEventListener("click", function(){
        addProjectDialog.close();
    })
}

const closeTodoDialogEvent = () =>{
    const closeTodoDialogButton = document.querySelector("#closeTodoDialogButton");

    closeTodoDialogButton.addEventListener("click", function(){
        todoDialog.close();
    })
}

//Create a composite function that renders all projects and then adds all events to each project
const  renderAll = () => {
    let loadedProjects = loadProjects();
    renderAllProjects(loadedProjects);
    addTodoDialogEvents();
    addDeleteProjectEvents();
    renderTodos(loadedProjects);
}


export { createProjectDiv, renderProject, addTodoDialogEvents, addProjectDialogOpenEvent,closeTodoDialogEvent, renderAllProjects, addDeleteProjectEvents, renderTodos, closeProjectAddEvent, renderAll, addProjectWithinDialogEvent }; 


// I want to turn projects into stringify, then I want to load projects after turning the string back into array