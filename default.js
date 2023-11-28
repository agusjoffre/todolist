const createDefault = (ToDoCreationlogicModule) => {
  ToDoCreationlogicModule.createProject({ name: 'Test project', details: 'Some test details of the project' });

  ToDoCreationlogicModule.createProject({ name: 'Test project2', details: 'Some test details of the project2' });

  ToDoCreationlogicModule.createToDo('Test To Do1', 'Test description1', 25 / 11 / 23, 'Some testing notes1...', false, 0);

  ToDoCreationlogicModule.createToDo('Test To Do2', 'Test description2', 26 / 11 / 23, 'Some testing notes2...', true, 1);

  ToDoCreationlogicModule.createNote('Test note...', 'Test details1', 0);

  ToDoCreationlogicModule.createNote('Test note2...', 'Test details2', 1);

  ToDoCreationlogicModule.deleteProject(0);
};

export default createDefault;
