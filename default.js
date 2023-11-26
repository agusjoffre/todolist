import toDoCreationlogicModule from './logic';

const ToDoCreationlogicModule = toDoCreationlogicModule();

const createDefault = () => {
  ToDoCreationlogicModule.createProject('Test project', 'Some test details of the project');

  ToDoCreationlogicModule.createProject('Test project2', 'Some test details of the project2');

  ToDoCreationlogicModule.createToDo('Test To Do1', 'Test description1', 25 / 11 / 23, 'Some testing notes1...', false, 0);

  ToDoCreationlogicModule.createToDo('Test To Do2', 'Test description2', 26 / 11 / 23, 'Some testing notes2...', true, 1);

  ToDoCreationlogicModule.createNote('Test note...', 'Test details1', 0);

  ToDoCreationlogicModule.createNote('Test note2...', 'Test details2', 1);
};

export default createDefault;
