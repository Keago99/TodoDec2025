import { createProject, getProjects, setProjects, addProject } from "./project";
import {addTodoDialogEvents, renderProject, addProjectDialogOpenEvent, closeTodoDialogEvent, renderAllProjects, addDeleteProjectEvents, renderTodos, closeProjectAddEvent, renderAll, addProjectWithinDialogEvent, addTodoDialogEvent } from "./displayController";
import { createTodo } from "./todo";
import { loadProjects, storeProjects } from "./localStorage";

// This file is for functions that have to do with inital setup, pulling from multiple sources

closeProjectAddEvent();

const initalProject = () => {
    let projects = loadProjects();
    const newTodo = createTodo("testTodoName", "its a test todo!", "NOW", "low");
    const startingProject = createProject("StartingProject1");
    startingProject.addTodo(newTodo);
    projects.push(startingProject);
    const newTodo2 = createTodo("2nd test todo", "its a test todo!", "NOW", "high");
    const startingProject2 = createProject("2nd starting project");
    startingProject2.addTodo(newTodo2);
    projects.push(startingProject2);
    console.log("inital Project added");
    storeProjects(projects);
    addTodoDialogEvent();
}

const setup = () => {

    initalProject();
    addProjectDialogOpenEvent();
    closeTodoDialogEvent();
    addProjectWithinDialogEvent();
    renderAll ();
}



export { setup };

