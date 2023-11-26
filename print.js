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

const printInterfaceModule = (() => {
  const clearBottomInterface = () => {
    const switchingContainer = createInterface().switchingContainer();
    if (switchingContainer) {
      while (switchingContainer.firstChild) {
        switchingContainer.removeChild(switchingContainer.firstChild);
      }
    }
  };

  const printInterface = () => {
    clearBottomInterface();
    createInterface().createAll();
    createInterface().appendAll();
  };

  const printAddToDoInterface = () => {
    clearBottomInterface();
    createToDoInterface().createAll();
    createToDoInterface().appendAll();
  };

  const printAddProjectInterface = () => {
    clearBottomInterface();
    createProjectInterface().createAll();
    createProjectInterface().appendAll();
  };

  const printAddNotesInterface = () => {
    clearBottomInterface();
    createNoteInterface().createAll();
    createNoteInterface().appendAll();
  };

  return {
    printInterface, printAddToDoInterface, printAddProjectInterface, printAddNotesInterface,
  };
});

export default {
  printProjects, printInterfaceModule,
};
