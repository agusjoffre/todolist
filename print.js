import {
  createInterface, createNoteInterface, createProjectInterface, createToDoInterface,
} from './DOMInterfacesCreation';
import { selectAside, selectSidebar } from './DOMMain';

const printProjects = (projects) => {
  projects.forEach((project) => {
    const projectName = document.createElement('div');
    projectName.innerText = project.name;
    const projectDetails = document.createElement('div');
    projectDetails.innerText = project.details;
    const toDoQ = document.createElement('div');
    toDoQ.innerText = project.toDo.length;
  });
};

const aside = document.querySelector('.todo-right');
const button = document.querySelector('.projects-btn');

button.addEventListener('click', () => {
  aside.appendChild(printProjects());
});

const printInterface = () => {
  createInterface().createAll();
  createInterface().appendAll();
};

export default printProjects;
