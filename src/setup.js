import { createProject, getProjects, setProjects, addProject } from "./project";
import {addTodoDialogEvents, renderProject, addProjectDialogOpenEvent, closeTodoDialogEvent, renderAllProjects, addDeleteProjectEvents, renderTodos, closeProjectAddEvent, renderAll } from "./displayController";
import { createTodo } from "./todo";
import { loadProjects, storeProjects } from "./localStorage";

// This file is for functions that have to do with inital setup, pulling from multiple sources

closeProjectAddEvent();

const initalProject = () => {
    let projects = loadProjects();
    const newTodo = createTodo("testTodoName", "its a test todo!", "NOW", "urgent");
    const startingProject = createProject("StartingProject1");
    startingProject.addTodo(newTodo);
    projects.push(startingProject);
    console.log("inital Project added");
    storeProjects(projects);
}

const setup = () => {

    initalProject();
    addProjectDialogOpenEvent();
    closeTodoDialogEvent();
    renderAll ();
}



export { setup };

