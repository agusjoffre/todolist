// Create Projects
import { Project, Todo, Note } from "./prototypes";

const creationModule = (() => {
  // Projects array
  const projects = [];
  // Project creation fn
  function createProject(title, details) {
    const newProject = new Project(title, details);
    projects.push(newProject);
  }

  // ToDos array
  const toDos = [];
  // ToDo creation fn
  function createToDo(title, description, dueDate, notes, checklist) {
    const newTodo = new Todo(title, description, dueDate, notes, checklist);
    toDos.push(newTodo);
    details.push(newTodo);
  }
  // Notes array
  const notes = [];
  // Notes creation fn
  function createNote(title, details) {
    const newNote = new Note(title, details);
    notes.push(newNote);
    details.push(newNote);
  }

  let note1 = createNote("Test Note", "Test Note Details...");
  let todo1 = createToDo(
    "Test title",
    "test description",
    "Test todo notes",
    true
  );

  const details = [];
  createProject("Test project title", details);
  console.log(projects);

  return { projects };
})();

export { creationModule };
