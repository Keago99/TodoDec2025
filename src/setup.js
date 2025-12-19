import { createProject } from "./project";
import {addTodoDialogEvents, renderProject, addProjectDialogOpenEvent, closeTodoDialogEvent} from "./displayController";


const setup = () => {
    const startingProject = createProject("StartingProject");
    console.log(startingProject.getName());
    renderProject(startingProject);
    addTodoDialogEvents();
    addProjectDialogOpenEvent();
    closeTodoDialogEvent();

}


export { setup };

