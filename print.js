import {
  createInterface, createNoteInterface, createProjectInterface, createToDoInterface,
} from './DOMInterfacesCreation';
import {
  // eslint-disable-next-line max-len
  createProjectSection, createNotesSection, createToDoSection,
} from './DOMSectionsCreation';
import { interfaceListeners, inputListenersModule } from './DOMListeners';
import { ToDoCreationlogicModule, alertIfNoProjects } from './main';

const printSections = (() => {
  const clearWrapper = () => {
    const wrapp = document.querySelector('.info-input-wrapper');
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
    interfaceListeners().deleteProjectListener(ToDoCreationlogicModule.projects);
  };

  const printNotes = (notes) => {
    clearWrapper();
    notes.forEach((note) => {
      createNotesSection().appendAll(note.name, note.details);
    });
    interfaceListeners().deleteNotesListener(ToDoCreationlogicModule.notes);
  };

  const printToDos = (toDos) => {
    clearWrapper();
    toDos.forEach((todo) => {
      createToDoSection().appendAll(todo.name, todo.dueDate, todo.check);
    });
    interfaceListeners().toDoCheckListener(toDos);
    interfaceListeners().deleteToDoListener(toDos);
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
    const switchingContainer = document.querySelector('.switching-container');
    if (switchingContainer) {
      switchingContainer.innerHTML = '';
    }
  };

  const printInterface = () => {
    clearWrapper();
    clearBottomInterface();
    createInterface().appendAll();
    interfaceListeners().toDoInterfaceButtonListener();
    interfaceListeners().projectInterfaceButtonListener();
    interfaceListeners().noteInteraceButtonListener();
  };

  const printAddToDoInterface = () => {
    clearBottomInterface();
    createToDoInterface().appendAll(ToDoCreationlogicModule.projects);
    inputListenersModule().getToDoInputValues();
    alertIfNoProjects();
  };

  const printAddProjectInterface = () => {
    clearBottomInterface();
    createProjectInterface().appendAll();
    inputListenersModule().getProjectInputValues();
  };

  const printAddNotesInterface = () => {
    clearBottomInterface();
    createNoteInterface().appendAll(ToDoCreationlogicModule.projects);
    inputListenersModule().getNotesInputValues();
  };

  return {
    printInterface, printAddToDoInterface, printAddProjectInterface, printAddNotesInterface,
  };
});

export {
  printSections, printInterfaceModule,
};
