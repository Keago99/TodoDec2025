import { createProject, getProjects, setProjects, addProject } from "./project";
import {addTodoDialogEvents, renderProject, addProjectDialogOpenEvent, closeTodoDialogEvent, renderAllProjects, addDeleteProjectEvents} from "./displayController";
import { createTodo } from "./todo";
import { loadProjects, storeProjects } from "./localStorage";

const setup = () => {

    let projects = loadProjects();
    const newTodo = createTodo("testTodoName", "its a test todo!", "NOW", "urgent");
    const startingProject = createProject("StartingProject1");
    console.log(startingProject.getName());
    startingProject.addTodo(newTodo);
    projects.push(startingProject);
    renderAllProjects(projects);
    addTodoDialogEvents();
    addProjectDialogOpenEvent();
    closeTodoDialogEvent();
    addDeleteProjectEvents();
    storeProjects(projects);
}



export { setup };

