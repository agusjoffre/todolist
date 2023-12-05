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
  return { addCircleButton, projectButton };
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
      console.log(ToDoCreationlogicModule.projects);
      ToDoCreationlogicModule.createToDo(titleValue, detailsValue, dueDateValue, false, 0);
      console.log(ToDoCreationlogicModule.toDos);
    });
  };
  return { getToDoInputValues };
});

export { sideBarListeners, interfaceListeners, inputListenersModule };
