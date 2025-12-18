//used to controll everything that requires setup with displays, including the creation of new html elements
import { createProject } from "./project.js"
import { getProjects } from "./project.js"


// Creates the project HTML element (singular)
const createProjectDiv = (Project) => {
    return`
    <div class="Project">
        <h1>${Project.getName()}</h1>
        <p>project name: <span>${Project.getName()}</span>
        <div class="todoArea" data-project-id="${Project.getID()}>
            <br>
        </div>
        <button type="button">
            Add Task!
        </button>
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

export { createProjectDiv, renderProject}; 