import toDoCreationlogicModule from './logic';
import createDefault from './default';
import { interfaceListeners, sideBarListeners } from './DOMListeners';

const ToDoCreationlogicModule = toDoCreationlogicModule();
sideBarListeners().addCircleButton();
sideBarListeners().projectButton(ToDoCreationlogicModule.projects);
sideBarListeners().homeButton(ToDoCreationlogicModule.toDos);
sideBarListeners().notesButton(ToDoCreationlogicModule.notes);
createDefault(ToDoCreationlogicModule);

export default ToDoCreationlogicModule;
