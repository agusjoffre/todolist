import { printInterfaceModule, printSections } from './print';
import toDoCreationlogicModule from './logic';

const sideBarListeners = (() => {
  const addCircleButton = () => {
    const addButton = document.querySelector('#add-side-btn');
    addButton.addEventListener('click', () => {
      printInterfaceModule().printInterface();
      console.log('listener');
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

export default sideBarListeners;
