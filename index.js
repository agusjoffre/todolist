// Projects, Todos and notes classes

class Project {
  constructor(_title, _details) {
    this.title = _title;
    this.details = _details;
  }
}

class Todo {
  constructor(_title, _description, _dueDate, _notes, _checklist) {
    this.title = _title;
    this.description = _description;
    this.dueDate = _dueDate;
    this.notes = _notes;
    this.checklist = _checklist;
  }
}

class Note {
  constructor(_title, _details) {
    this.title = _title;
    this.details = _details;
  }
}

// create info module

const creationModule = (() => {
  // Projects array
  const projects = [];
  // Project details array
  const projectDetails = [];
  // Project creation fn
  function createProject(title, _details) {
    const newProject = new Project(title, _details);
    projects.push(newProject);
  }

  // ToDos array
  const toDos = [];
  // ToDo creation fn
  function createToDo(title, description, dueDate, notes, checklist) {
    const newTodo = new Todo(title, description, dueDate, notes, checklist);
    toDos.push(newTodo);
    projectDetails.push(newTodo);
  }
  // Notes array
  const notes = [];
  // Notes creation fn
  function createNote(title, _details) {
    const newNote = new Note(title, _details);
    notes.push(newNote);
    projectDetails.push(newNote);
  }

  return { projectDetails, projects, createToDo, createNote, createProject };
})();

//--------------------------------------testing----------------------------------------------------//
let note1 = creationModule.createNote("Test Note", "Test Note Details...");
let todo1 = creationModule.createToDo(
  "Test title",
  "test description",
  "24/12/23",
  "Test notes",
  true
);

creationModule.createProject(
  "Test project title",
  creationModule.projectDetails
);

console.log(creationModule.projects);
//---------------------------------------------------------------------------------------------------//
