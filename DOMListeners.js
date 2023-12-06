import { printInterfaceModule, printSections } from './print';
import ToDoCreationlogicModule from './main';

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

const interfaceListeners = (() => {
  const toDoInterfaceButtonListener = () => {
    const toDoButton = document.querySelector('.info-input-top-todo-btn');
    toDoButton.addEventListener('click', () => {
      printInterfaceModule().printAddToDoInterface();
    });
  };

  const projectInterfaceButtonListener = () => {
    const projectInterfaceButton = document.querySelector('.info-input-top-project-btn');
    projectInterfaceButton.addEventListener('click', () => {
      printInterfaceModule().printAddProjectInterface();
    });
  };

  const noteInteraceButtonListener = () => {
    const noteInterfaceButton = document.querySelector('.info-input-top-notes-btn');
    noteInterfaceButton.addEventListener('click', () => {
      printInterfaceModule().printAddNotesInterface();
    });
  };
  return { toDoInterfaceButtonListener, projectInterfaceButtonListener, noteInteraceButtonListener };
});

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
      // despues cambiar tema projectindex = 0
      ToDoCreationlogicModule.createToDo(titleValue, detailsValue, dueDateValue, false, 0);
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
      ToDoCreationlogicModule.createNote(notesTitleValue, notesDetailsValue, 0);
      console.log('Notes: ');
      console.log(ToDoCreationlogicModule.notes);
      form.reset();
    });
  };
  return { getToDoInputValues, getProjectInputValues, getNotesInputValues };
});

export { sideBarListeners, interfaceListeners, inputListenersModule };
