import {
  createInterface, createNoteInterface, createProjectInterface, createToDoInterface,
} from './DOMInterfacesCreation';

import {
  // eslint-disable-next-line max-len
  createProjectSection, createNotesSection, createToDoSection,
} from './DOMSectionsCreation';

const printSections = (() => {
  const clearWrapper = () => {
    const wrapp = document.querySelector('.info-input-wrapper');
    console.log(wrapp);
    if (wrapp) {
      while (wrapp.firstChild) {
        wrapp.removeChild(wrapp.firstChild);
      }
    }
  };

  const CreateProjectSection = createProjectSection();
  const printProjects = (projects) => {
    clearWrapper();
    projects.forEach((project) => {
      CreateProjectSection.createAll();
      CreateProjectSection.appendAll(project.name, project.toDo.length, project.details);
    });
  };

  const printNotes = (notes) => {
    clearWrapper();
    notes.forEach((note) => {
      createNotesSection().createAll(note.name, note.details);
    });
  };

  const printToDos = (toDos) => {
    clearWrapper();
    toDos.forEach((todo) => {
      createToDoSection().createAll(todo.name, todo.duedate);
    });
  };

  return {
    printProjects, printNotes, printToDos, clearWrapper,
  };
});

const printInterfaceModule = (() => {
  const clearWrapper = () => {
    const wrapp = document.querySelector('.info-input-wrapper');
    if (wrapp) {
      wrapp.innerHTML = '';
    }
  };

  const clearBottomInterface = () => {
    const switchingContainer = createInterface().switchingContainer();
    if (switchingContainer) {
      while (switchingContainer.firstChild) {
        switchingContainer.removeChild(switchingContainer.firstChild);
      }
    }
  };

  const printInterface = () => {
    clearWrapper();
    clearBottomInterface();
    createInterface().appendAll();
  };

  const printAddToDoInterface = () => {
    clearBottomInterface();
    createToDoInterface().appendAll();
  };

  const printAddProjectInterface = () => {
    clearBottomInterface();
    createProjectInterface().appendAll();
  };

  const printAddNotesInterface = () => {
    clearBottomInterface();
    createNoteInterface().appendAll();
  };

  return {
    printInterface, printAddToDoInterface, printAddProjectInterface, printAddNotesInterface,
  };
});

export {
  printSections, printInterfaceModule,
};
