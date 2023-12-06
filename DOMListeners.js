import { printInterfaceModule, printSections } from './print';
import ToDoCreationlogicModule from './main';

/* -------------------------------Sidebar listeners--------------------------------------*/

const sideBarListeners = (() => {
  const addCircleButton = () => {
    const addButton = document.querySelector('#add-side-btn');
    addButton.addEventListener('click', () => {
      printInterfaceModule().printInterface();
    });
  };

  const projectButton = (projects) => {
    const projBtn = document.querySelector('.projects-btn');
    projBtn.addEventListener('click', () => {
      printSections().printProjects(projects);
    });
  };

  const homeButton = (toDos) => {
    const homeBtn = document.querySelector('.home-btn');
    homeBtn.addEventListener('click', () => {
      printSections().printToDos(toDos);
    });
  };

  const notesButton = (notes) => {
    const notesBtn = document.querySelector('.notes-btn');
    notesBtn.addEventListener('click', () => {
      printSections().printNotes(notes);
    });
  };

  return {
    addCircleButton, projectButton, homeButton, notesButton,
  };
});

/* -------------------------------Interface listeners--------------------------------------*/

const interfaceListeners = (() => {
  const toDoInterfaceButtonListener = (projects) => {
    const toDoButton = document.querySelector('.info-input-top-todo-btn');
    toDoButton.addEventListener('click', () => {
      printInterfaceModule().printAddToDoInterface(projects);
    });
  };

  const projectInterfaceButtonListener = () => {
    const projectInterfaceButton = document.querySelector('.info-input-top-project-btn');
    projectInterfaceButton.addEventListener('click', () => {
      printInterfaceModule().printAddProjectInterface();
    });
  };

  const noteInteraceButtonListener = (projects) => {
    const noteInterfaceButton = document.querySelector('.info-input-top-notes-btn');
    noteInterfaceButton.addEventListener('click', () => {
      printInterfaceModule().printAddNotesInterface(projects);
    });
  };

  const deleteToDoListener = (toDos) => {
    const deleteButton = document.querySelectorAll('.card-delete-btn');
    deleteButton.forEach((button, i) => {
      button.addEventListener('click', () => {
        const index = i;
        ToDoCreationlogicModule.deleteToDo(index);
        printSections().printToDos(toDos);
      });
    });
  };

  return {
    toDoInterfaceButtonListener, projectInterfaceButtonListener, noteInteraceButtonListener, deleteToDoListener,
  };
});

/* -------------------------------Input listeners--------------------------------------*/

const inputListenersModule = (() => {
  const getToDoInputValues = () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const titleInputDOM = document.querySelector('.todo-title-input');
      const titleValue = titleInputDOM.value;
      const detailsInputDOM = document.querySelector('.todo-description-input');
      const detailsValue = detailsInputDOM.value;
      const dueDateInputDOM = document.querySelector('.todo-duedate-input');
      const dueDateValue = dueDateInputDOM.value;
      const projectChooseInput = document.querySelector('select');
      const projectChooseValue = projectChooseInput.selectedIndex;
      ToDoCreationlogicModule.createToDo(titleValue, detailsValue, dueDateValue, false, projectChooseValue);
      form.reset();
    });
  };

  const getProjectInputValues = () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const projectTitleDOM = document.querySelector('.project-title-input');
      const projectTitleValue = projectTitleDOM.value;
      ToDoCreationlogicModule.createProject(projectTitleValue, null);
      form.reset();
    });
  };

  const getNotesInputValues = () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const notesTitleDOM = document.querySelector('.notes-title-input');
      const notesTitleValue = notesTitleDOM.value;
      const notesDetailsDOM = document.querySelector('.notes-details-input');
      const notesDetailsValue = notesDetailsDOM.value;
      const projectChooseInput = document.querySelector('select');
      const projectChooseValue = projectChooseInput.selectedIndex;
      ToDoCreationlogicModule.createNote(notesTitleValue, notesDetailsValue, projectChooseValue);
      form.reset();
    });
  };
  return { getToDoInputValues, getProjectInputValues, getNotesInputValues };
});

export { sideBarListeners, interfaceListeners, inputListenersModule };
