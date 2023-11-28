import { projectFactory, toDoFactory, noteFactory } from './factory';
import { printSections } from './print';

const toDoCreationlogicModule = (() => {
  const projects = [];
  // const projectDetails = [];
  const createProject = ({ name, details }) => {
    const newProject = projectFactory(name, details);
    projects.push(newProject);
  };

  const addToDoInProject = (toDo, projectIndex) => {
    projects[projectIndex].toDo.push(toDo);
  };

  const addNoteInProject = (note, projectIndex) => {
    projects[projectIndex].note.push(note);
  };

  const toDos = [];
  const createToDo = (name, description, dueDate, notes, check, projectIndex) => {
    const newToDo = toDoFactory(name, description, dueDate, notes, check, projectIndex);
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
