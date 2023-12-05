import { printInterfaceModule, printSections } from './print';

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

export { sideBarListeners, interfaceListeners };
