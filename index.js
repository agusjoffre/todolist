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

const infoModule = (() => {
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

  const deleteProject = (i) => {
    projects.splice(i);
  };
  const deleteToDo = (i) => {
    toDos.splice(i);
  };
  const deleteNote = (i) => {
    notes.splice(i);
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

// const addTodoInfoModule = (() => {
//   const addSidebarButton = document.querySelector("#add-side-btn");
//   addSidebarButton.addEventListener("click", () => {
//     const projectTitleInput = prompt("Project Title...");
//     const toDoTitleInput = prompt("To do title...");
//     const toDoDescriptionInput = prompt("To do Description...");
//     const toDoDueDateInput = prompt("To do due date...");
//     const toDoNotesInput = prompt("To do notes...");
//     const toDoChecklistInput = prompt("To do checklist... True or false");
//     const noteTitleInput = prompt("Note title...");
//     const noteDetailsInput = prompt("Note details...");
//     let checklist;
//     if (toDoChecklistInput === "true") {
//       checklist = true;
//     } else if (toDoChecklistInput === "false") {
//       checklist = false;
//     }
//     if (toDoChecklistInput !== "true" && toDoChecklistInput !== "false") {
//       alert("Checklist has to be true or false");
//       return;
//     }

//     infoModule.createToDo(
//       toDoTitleInput,
//       toDoDescriptionInput,
//       toDoDueDateInput,
//       toDoNotesInput,
//       checklist
//     );

//     infoModule.createNote(noteTitleInput, noteDetailsInput);
//     infoModule.createProject(projectTitleInput, infoModule.projectDetails);
//     console.log(infoModule.projects);
//   });
// })();

const userInterfaceModule = (() => {
  /* DOM SELECTORS */
  const toDoRightContainer = document.querySelector(".todo-right");
  //----------------------------------------------------------------------------//
  let realContainer;
  let switchingContainer;
  const createUserInfoInputInterface = () => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("info-input-wrapper");
    toDoRightContainer.appendChild(wrapper);
    const containerOfContainers = document.createElement("div");
    containerOfContainers.classList.add("info-input-container");
    wrapper.appendChild(containerOfContainers);
    const containerTitle = document.createElement("p");
    containerTitle.innerText = "Create a new...";
    containerTitle.classList.add("info-input-container-title");
    containerOfContainers.appendChild(containerTitle);
    realContainer = document.createElement("div");
    realContainer.classList.add("info-input-container-container");
    containerOfContainers.appendChild(realContainer);
    const top = document.createElement("div");
    top.classList.add("info-input-top");
    realContainer.appendChild(top);
    const topToDo = document.createElement("button");
    topToDo.innerText = "To Do";
    topToDo.classList.add("info-input-top-btn");
    topToDo.classList.add("info-input-top-todo-btn");
    top.appendChild(topToDo);
    const topProject = document.createElement("button");
    topProject.innerText = "Project";
    topProject.classList.add("info-input-top-btn");
    topProject.classList.add("info-input-top-project-btn");
    top.appendChild(topProject);
    const topNotes = document.createElement("button");
    topNotes.innerText = "Notes";
    topNotes.classList.add("info-input-top-btn");
    topNotes.classList.add("info-input-top-notes-btn");
    top.appendChild(topNotes);
  };

  let toDoTitleInput;
  let toDoDescriptionInput;
  let toDoDueDateInput;
  let toDoAdd;
  const createToDoInputInterface = () => {
    switchingContainer = document.createElement("div");
    switchingContainer.classList.add("switching-container");
    realContainer.appendChild(switchingContainer);
    toDoTitleInput = document.createElement("input");
    toDoTitleInput.classList.add("todo-title-input");
    switchingContainer.appendChild(toDoTitleInput);
    toDoDescriptionInput = document.createElement("textarea");
    toDoDescriptionInput.classList.add("todo-description-input");
    switchingContainer.appendChild(toDoDescriptionInput);
    const toDoBottom = document.createElement("div");
    toDoBottom.classList.add("todo-bottom");
    switchingContainer.appendChild(toDoBottom);
    const toDoDueDateTitle = document.createElement("p");
    toDoDueDateTitle.classList.add("todo-duedate-title");
    toDoDueDateTitle.innerText = "Due date: ";
    toDoBottom.appendChild(toDoDueDateTitle);
    toDoDueDateInput = document.createElement("input");
    toDoDueDateInput.type = "date";
    toDoDueDateInput.classList.add("todo-duedate-input");
    toDoBottom.appendChild(toDoDueDateInput);
    toDoAdd = document.createElement("button");
    toDoAdd.classList.add("todo-add-button");
    toDoAdd.innerText = "Add";
    toDoBottom.appendChild(toDoAdd);
  };

  let projectTitleInput;
  let addProject;
  const createProjectInputInterface = () => {
    switchingContainer = document.createElement("div");
    switchingContainer.classList.add("switching-container");
    realContainer.appendChild(switchingContainer);
    projectTitleInput = document.createElement("input");
    projectTitleInput.classList.add("project-title-input");
    switchingContainer.appendChild(projectTitleInput);
    addProject = document.createElement("button");
    addProject.classList.add("project-add-btn");
    addProject.innerText = "Add";
    switchingContainer.appendChild(addProject);
  };

  let noteTitleInput;
  let noteDetailsInput;
  let addNote;
  const createNotesInputInterface = () => {
    switchingContainer = document.createElement("div");
    switchingContainer.classList.add("switching-container");
    realContainer.appendChild(switchingContainer);
    noteTitleInput = document.createElement("input");
    noteTitleInput.classList.add("notes-title-input");
    switchingContainer.appendChild(noteTitleInput);
    noteDetailsInput = document.createElement("textarea");
    noteDetailsInput.classList.add("notes-details-input");
    switchingContainer.appendChild(noteDetailsInput);
    addNote = document.createElement("button");
    addNote.classList.add("notes-add-btn");
    addNote.innerText = "Add";
    switchingContainer.appendChild(addNote);
  };

  const displayMainInterface = () => {
    while (toDoRightContainer.firstChild) {
      toDoRightContainer.removeChild(toDoRightContainer.firstChild);
    }
    createUserInfoInputInterface();
  };
  const displayToDoInterface = () => {
    while (switchingContainer.firstChild) {
      switchingContainer.removeChild(switchingContainer.firstChild);
    }
    createToDoInputInterface();
  };
  const displayProjectInterface = () => {
    while (switchingContainer.firstChild) {
      switchingContainer.removeChild(switchingContainer.firstChild);
    }
    createProjectInputInterface();
  };
  const displayNotesInterface = () => {
    while (switchingContainer.firstChild) {
      switchingContainer.removeChild(switchingContainer.firstChild);
    }
    createNotesInputInterface();
  };
  return {
    displayMainInterface,
    displayToDoInterface,
    displayProjectInterface,
    displayNotesInterface,
  };
})();

const listenersModule = (() => {
  const addCircleButton = document.querySelector("#add-side-btn");
  addCircleButton.addEventListener("click", () => {
    userInterfaceModule.displayMainInterface();
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
