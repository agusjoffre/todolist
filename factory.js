// Projects, Todos and notes factories

const projectFactory = (name, details) => ({
  name, details, toDo: [], note: [],
});

const toDoFactory = (name, description, dueDate, notes, check, projectIndex) => ({
  name, description, dueDate, notes, check, projectIndex,
});

const noteFactory = (name, details) => ({ name, details });

export { projectFactory, toDoFactory, noteFactory };
