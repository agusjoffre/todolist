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

const createInfoModule = (() => {
  // Projects array
  const projects = [];
  // Project details array
  const projectDetails = [];
  // Project creation fn
  const createProject = (title, _details) => {
    const newProject = new Project(title, _details);
    projects.push(newProject);
  };

  // ToDos array
  const toDos = [];
  // ToDo creation fn
  const createToDo = (title, description, dueDate, notes, checklist) => {
    const newTodo = new Todo(title, description, dueDate, notes, checklist);
    toDos.push(newTodo);
    projectDetails.push(newTodo);
  };
  // Notes array
  const notes = [];
  // Notes creation fn
  const createNote = (title, details) => {
    const newNote = new Note(title, details);
    notes.push(newNote);
    projectDetails.push(newNote);
  };

  return {
    projectDetails,
    projects,
    createToDo,
    createNote,
    createProject,
    toDos,
    notes,
  };
})();

const addTodoInfoModule = (() => {
  const addSidebarButton = document.querySelector("#add-side-btn");
  addSidebarButton.addEventListener("click", () => {
    const projectTitleInput = prompt("Project Title...");
    const toDoTitleInput = prompt("To do title...");
    const toDoDescriptionInput = prompt("To do Description...");
    const toDoDueDateInput = prompt("To do due date...");
    const toDoNotesInput = prompt("To do notes...");
    const toDoChecklistInput = prompt("To do checklist... True or false");
    const noteTitleInput = prompt("Note title...");
    const noteDetailsInput = prompt("Note details...");
    let checklist;
    if (toDoChecklistInput === "true") {
      checklist = true;
    } else if (toDoChecklistInput === "false") {
      checklist = false;
    }
    if (toDoChecklistInput !== "true" && toDoChecklistInput !== "false") {
      alert("Checklist has to be true or false");
      return;
    }

    createInfoModule.createToDo(
      toDoTitleInput,
      toDoDescriptionInput,
      toDoDueDateInput,
      toDoNotesInput,
      checklist
    );
    createInfoModule.createNote(noteTitleInput, noteDetailsInput);
    createInfoModule.createProject(
      projectTitleInput,
      createInfoModule.projectDetails
    );
    console.log(createInfoModule.projects);
    console.log(createInfoModule.toDos);
    console.log(createInfoModule.notes);
  });
})();

/*
//----------------------------testing--------------------------------------------//
let note1 = createInfoModule.createNote("Test Note", "Test Note Details...");
let todo1 = createInfoModule.createToDo(
  "Test title",
  "test description",
  "24/12/23",
  "Test notes",
  true
);
createInfoModule.createProject(
  "Test project title",
  createInfoModule.projectDetails
);

//-----------------------------testing2-------------------------------------------------//
let project2 = addInfoModule.addProject("Project 2");
let todo2 = addInfoModule.addToDo(
  "Todo 2",
  "Description 2",
  "23/12/23",
  "Notes 2",
  true
);
let note2 = addInfoModule.addNote("Note 2", "Details 2");
console.log(createInfoModule.projects);
console.log(createInfoModule.toDos);
console.log(createInfoModule.notes);
//-------------------------------------------------------------------------------//
*/
