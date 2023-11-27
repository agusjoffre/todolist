import {
  createInterface, createNoteInterface, createProjectInterface, createToDoInterface,
} from './DOMInterfacesCreation';

import {
  createProjectSection, createNotesSection, createTodaySection, createWeekSection, createToDoSection,
} from './DOMSectionsCreation';

import { selectAside, selectSidebar } from './DOMMain';

const printSections = (() => {
  const asideContainer = selectAside().wrapper;
  const clearWrapper = () => {
    if (asideContainer) {
      while (asideContainer.firstChild) {
        asideContainer.removeChild(asideContainer.firstChild);
      }
    }
  };

  const printProjects = (projects) => {
    clearWrapper();
    projects.forEach((project) => {
      createProjectSection().createAll(project.name, project.toDo.lenght, project.details);
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

  return { printProjects, printNotes, printToDos };
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
