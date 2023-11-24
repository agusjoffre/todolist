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

const addInfoModule = (() => {
  const sendToDoInfo = (title, description, dueDate) => {
    console.log(title, description, dueDate);
  };
  const sendProjectInfo = (title) => {
    console.log(title);
  };
  const sendNotesInfo = (title, details) => {
    console.log(title, details);
  };
  return {
    sendToDoInfo,
    sendProjectInfo,
    sendNotesInfo,
  };
})();
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
  const toDoRightContainer = document.querySelector(".todo-right");

  let realContainer;
  let switchingContainer;
  let topToDo;
  let topProject;
  let topNotes;

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
    ///
    topToDo = document.createElement("button");
    topToDo.innerText = "To Do";
    topToDo.classList.add("info-input-top-btn");
    topToDo.classList.add("info-input-top-todo-btn");
    top.appendChild(topToDo);
    //
    topProject = document.createElement("button");
    topProject.innerText = "Project";
    topProject.classList.add("info-input-top-btn");
    topProject.classList.add("info-input-top-project-btn");
    top.appendChild(topProject);
    ///
    topNotes = document.createElement("button");
    topNotes.innerText = "Notes";
    topNotes.classList.add("info-input-top-btn");
    topNotes.classList.add("info-input-top-notes-btn");
    top.appendChild(topNotes);
  };

  let toDoForm;
  const createToDoInputInterface = () => {
    switchingContainer = document.createElement("div");
    switchingContainer.classList.add("switching-container");
    realContainer.appendChild(switchingContainer);
    //
    toDoForm = document.createElement("form");
    switchingContainer.appendChild(toDoForm);
    //
    const toDoTitleInput = document.createElement("input");
    toDoTitleInput.placeholder = "Title...";
    toDoTitleInput.classList.add("todo-title-input");
    toDoTitleInput.name = "title";
    toDoForm.appendChild(toDoTitleInput);
    const toDoDescriptionInput = document.createElement("textarea");
    toDoDescriptionInput.placeholder = "Complete details...";
    toDoDescriptionInput.classList.add("todo-description-input");
    toDoDescriptionInput.name = "description";
    toDoForm.appendChild(toDoDescriptionInput);
    const toDoBottom = document.createElement("div");
    toDoBottom.classList.add("todo-bottom");
    toDoForm.appendChild(toDoBottom);
    const toDoBottomLeft = document.createElement("div");
    toDoBottomLeft.classList.add("todo-bottom-left");
    toDoBottom.appendChild(toDoBottomLeft);
    const toDoDueDateTitle = document.createElement("p");
    toDoDueDateTitle.classList.add("todo-duedate-title");
    toDoDueDateTitle.innerText = "Due date: ";
    toDoBottomLeft.appendChild(toDoDueDateTitle);
    const toDoDueDateInput = document.createElement("input");
    toDoDueDateInput.name = "dueDate";
    toDoDueDateInput.type = "date";
    toDoDueDateInput.classList.add("todo-duedate-input");
    toDoBottomLeft.appendChild(toDoDueDateInput);
    const toDoBottomRight = document.createElement("div");
    toDoBottomRight.classList.add("todo-bottom-right");
    toDoBottom.appendChild(toDoBottomRight);
    const toDoAdd = document.createElement("button");
    toDoAdd.type = "submit";
    toDoAdd.classList.add("todo-add-button");
    toDoAdd.innerText = "Add";
    toDoBottomRight.appendChild(toDoAdd);
  };

  let projectTitleInput;
  let addProject;
  let projectForm;
  const createProjectInputInterface = () => {
    switchingContainer = document.createElement("div");
    switchingContainer.classList.add("switching-container");
    realContainer.appendChild(switchingContainer);
    projectForm = document.createElement("form");
    switchingContainer.appendChild(projectForm);
    projectTitleInput = document.createElement("input");
    projectTitleInput.name = "title";
    projectTitleInput.classList.add("project-title-input");
    projectTitleInput.placeholder = "Project title...";
    projectForm.appendChild(projectTitleInput);
    addProject = document.createElement("button");
    addProject.type = "submit";
    addProject.classList.add("project-add-btn");
    addProject.innerText = "Add";
    projectForm.appendChild(addProject);
  };

  let noteTitleInput;
  let noteDetailsInput;
  let addNote;
  let notesForm;
  const createNotesInputInterface = () => {
    switchingContainer = document.createElement("div");
    switchingContainer.classList.add("switching-container");
    realContainer.appendChild(switchingContainer);
    notesForm = document.createElement("form");
    switchingContainer.appendChild(notesForm);
    noteTitleInput = document.createElement("input");
    noteTitleInput.name = "title";
    noteTitleInput.classList.add("notes-title-input");
    noteTitleInput.placeholder = "Note title...";
    notesForm.appendChild(noteTitleInput);
    noteDetailsInput = document.createElement("textarea");
    noteDetailsInput.classList.add("notes-details-input");
    noteDetailsInput.name = "details";
    noteDetailsInput.placeholder = "Complete details...";
    notesForm.appendChild(noteDetailsInput);
    addNote = document.createElement("button");
    addNote.type = "submit";
    addNote.classList.add("notes-add-btn");
    addNote.innerText = "Add";
    notesForm.appendChild(addNote);
  };

  const assignEventListeners = () => {
    if (topToDo) {
      topToDo.addEventListener("click", () => {
        displayToDoInterface();
      });
    }
    if (topProject) {
      topProject.addEventListener("click", () => {
        displayProjectInterface();
      });
    }
    if (topNotes) {
      topNotes.addEventListener("click", () => {
        displayNotesInterface();
      });
    }
    if (toDoForm) {
      toDoForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = toDoForm.elements.title.value;
        const description = toDoForm.elements.description.value;
        const dueDate = toDoForm.elements.dueDate.value;
        addInfoModule.sendToDoInfo(title, description, dueDate);
      });
    }
    if (projectForm) {
      projectForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = projectForm.elements.title.value;
        console.log("Hola");
        addInfoModule.sendProjectInfo(title);
      });
    }
    if (notesForm) {
      notesForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = notesForm.elements.title.value;
        const details = notesForm.elements.details.value;
        console.log("Hola");
        addInfoModule.sendNotesInfo(title, details);
      });
    }
  };

  const clearBottomInterface = () => {
    // NO UNDEFINED
    if (switchingContainer) {
      //MIENTRAS HAYA UN DIV HIJO
      while (switchingContainer.firstChild) {
        //ELIMINAR EL HIJO
        switchingContainer.removeChild(switchingContainer.firstChild);
      }
    }
  };

  const displayMainInterface = () => {
    while (toDoRightContainer.firstChild) {
      toDoRightContainer.removeChild(toDoRightContainer.firstChild);
    }
    createUserInfoInputInterface();
  };
  const displayToDoInterface = () => {
    clearBottomInterface();
    createToDoInputInterface();
  };
  const displayProjectInterface = () => {
    clearBottomInterface();
    createProjectInputInterface();
    assignEventListeners();
  };
  const displayNotesInterface = () => {
    clearBottomInterface();
    createNotesInputInterface();
    assignEventListeners();
  };

  return {
    displayMainInterface,
    displayToDoInterface,
    assignEventListeners,
  };
})();

const listenersModule = (() => {
  const openInterfaceListener = () => {
    const circleAddButton = document.querySelector("#add-side-btn");
    circleAddButton.addEventListener("click", () => {
      userInterfaceModule.displayMainInterface();
      userInterfaceModule.displayToDoInterface();
      userInterfaceModule.assignEventListeners();
    });
  };
  openInterfaceListener();
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
