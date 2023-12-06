import toDoCreationlogicModule from './logic';
import createDefault from './default';
import { interfaceListeners, sideBarListeners } from './DOMListeners';

const ToDoCreationlogicModule = toDoCreationlogicModule();
sideBarListeners().addCircleButton();
sideBarListeners().projectButton(ToDoCreationlogicModule.projects);
sideBarListeners().homeButton(ToDoCreationlogicModule.toDos);
sideBarListeners().notesButton(ToDoCreationlogicModule.notes);
createDefault(ToDoCreationlogicModule);

const alertIfNoProjects = () => {
  if (ToDoCreationlogicModule.projects.length === 0) {
    alert('Please add a project!');
  }
};

export { ToDoCreationlogicModule, alertIfNoProjects };
