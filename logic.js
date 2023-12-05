import { projectFactory, toDoFactory, noteFactory } from './factory';

const toDoCreationlogicModule = (() => {
  const projects = [];
  // const projectDetails = [];
  const createProject = (name, details) => {
    const newProject = projectFactory(name, details);
    projects.push(newProject);
  };

  const addToDoInProject = (todo, projectIndex) => {
    console.log(projectIndex);
    console.log(projects);
    console.log(todo);
    projects[projectIndex].toDo.push(todo);
  };

  const addNoteInProject = (note, projectIndex) => {
    projects[projectIndex].note.push(note);
  };

  const toDos = [];
  const createToDo = (name, description, dueDate, check, projectIndex) => {
    const newToDo = toDoFactory(name, description, dueDate, check, projectIndex);
    toDos.push(newToDo);
    addToDoInProject(newToDo, projectIndex);
  };

  const notes = [];
  const createNote = (name, details, projectIndex) => {
    const newNote = noteFactory(name, details, projectIndex);
    notes.push(newNote);
    addNoteInProject(newNote, projectIndex);
  };

  const deleteProject = (i) => {
    projects.splice(i, 1);
  };

  const deleteToDo = (i) => {
    toDos.splice(i, 1);
  };

  const deleteNote = (i) => {
    notes.splice(i, 1);
  };

  return {
    projects,
    toDos,
    notes,
    createProject,
    createToDo,
    createNote,
    deleteProject,
    deleteToDo,
    deleteNote,
    storeToDoInProject: addToDoInProject,
    storeNoteInProject: addNoteInProject,
  };
});

export default toDoCreationlogicModule;
