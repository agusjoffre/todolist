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

  return { toDoInterfaceButton: toDoInterfaceButtonListener };
});

export { sideBarListeners, interfaceListeners };
