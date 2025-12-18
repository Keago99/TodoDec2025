import { createProject } from "./project";
import {createProjectDiv, renderProject} from "./displayController";

const setup = () => {
    const startingProject = createProject("StartingProject");
    console.log(startingProject.getName());
    renderProject(startingProject);
}


export { setup };

