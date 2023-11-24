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
  const createToDo = (title, description, dueDate, checklist) => {
    const newTodo = new Todo(title, description, dueDate, checklist);
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
    projects.splice(i, 1);
  };
  const deleteToDo = (i) => {
    toDos.splice(i, 1);
  };
  const deleteNote = (i) => {
    notes.splice(i, 1);
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
    infoModule.createToDo(title, description, dueDate, false);
    console.log(infoModule.toDos);
    console.log(infoModule.projects);
  };
  const sendProjectInfo = (title) => {
    infoModule.createProject(title, infoModule.projectDetails);
    console.log(infoModule.projects);
  };
  const sendNotesInfo = (title, details) => {
    infoModule.createNote(title, details);
    console.log(infoModule.notes);
    console.log(infoModule.projects);
  };

  return {
    sendToDoInfo,
    sendProjectInfo,
    sendNotesInfo,
  };
})();

const userInterfaceModule = (() => {
  const toDoRightContainer = document.querySelector(".todo-right");

  /*Despues chequear que --let-- son inutiles.*/

  let realContainer;
  let switchingContainer;
  let topToDo;
  let topProject;
  let topNotes;
  let toDoForm;
  let projectTitleInput;
  let addProject;
  let projectForm;
  let noteTitleInput;
  let noteDetailsInput;
  let addNote;
  let notesForm;

  const createUserInfoInputInterface = () => {
    // create elements
    const wrapper = document.createElement("div");
    const containerOfContainers = document.createElement("div");
    const containerTitle = document.createElement("p");
    realContainer = document.createElement("div");
    const top = document.createElement("div");
    topToDo = document.createElement("button");
    topProject = document.createElement("button");
    topNotes = document.createElement("button");

    // adding classes
    wrapper.classList.add("info-input-wrapper");
    containerOfContainers.classList.add("info-input-container");
    containerTitle.classList.add("info-input-container-title");
    realContainer.classList.add("info-input-container-container");
    top.classList.add("info-input-top");
    topToDo.classList.add("info-input-top-btn");
    topToDo.classList.add("info-input-top-todo-btn");
    topProject.classList.add("info-input-top-btn");
    topProject.classList.add("info-input-top-project-btn");
    topNotes.classList.add("info-input-top-btn");
    topNotes.classList.add("info-input-top-notes-btn");

    // inner texts
    containerTitle.innerText = "Create a new...";
    topToDo.innerText = "To Do";
    topProject.innerText = "Project";
    topNotes.innerText = "Notes";

    // appending
    toDoRightContainer.appendChild(wrapper);
    wrapper.appendChild(containerOfContainers);
    containerOfContainers.appendChild(containerTitle);
    containerOfContainers.appendChild(realContainer);
    realContainer.appendChild(top);
    top.appendChild(topToDo);
    top.appendChild(topProject);
    top.appendChild(topNotes);
  };

  const createToDoInputInterface = () => {
    // create elements
    switchingContainer = document.createElement("div");
    toDoForm = document.createElement("form");
    const toDoTitleInput = document.createElement("input");
    const toDoDescriptionInput = document.createElement("textarea");
    const toDoBottom = document.createElement("div");
    const toDoBottomLeft = document.createElement("div");
    const toDoDueDateTitle = document.createElement("p");
    const toDoDueDateInput = document.createElement("input");
    const toDoBottomRight = document.createElement("div");
    const toDoAdd = document.createElement("button");

    //adding classes
    switchingContainer.classList.add("switching-container");
    toDoTitleInput.classList.add("todo-title-input");
    toDoDescriptionInput.classList.add("todo-description-input");
    toDoBottom.classList.add("todo-bottom");
    toDoBottomLeft.classList.add("todo-bottom-left");
    toDoDueDateTitle.classList.add("todo-duedate-title");
    toDoDueDateInput.classList.add("todo-duedate-input");
    toDoBottomRight.classList.add("todo-bottom-right");
    toDoAdd.classList.add("todo-add-button");

    // placeholders
    toDoTitleInput.placeholder = "Title...";
    toDoDescriptionInput.placeholder = "Complete details...";

    // input names
    toDoTitleInput.name = "title";
    toDoDescriptionInput.name = "description";
    toDoDueDateInput.name = "dueDate";

    // input types
    toDoDueDateInput.type = "date";
    toDoAdd.type = "submit";

    // inner text
    toDoDueDateTitle.innerText = "Due date: ";
    toDoAdd.innerText = "Add";

    // appending
    realContainer.appendChild(switchingContainer);
    switchingContainer.appendChild(toDoForm);
    toDoForm.appendChild(toDoTitleInput);
    toDoForm.appendChild(toDoDescriptionInput);
    toDoForm.appendChild(toDoBottom);
    toDoBottom.appendChild(toDoBottomLeft);
    toDoBottomLeft.appendChild(toDoDueDateTitle);
    toDoBottomLeft.appendChild(toDoDueDateInput);
    toDoBottom.appendChild(toDoBottomRight);
    toDoBottomRight.appendChild(toDoAdd);
  };

  const createProjectInputInterface = () => {
    // create elements
    switchingContainer = document.createElement("div");
    projectForm = document.createElement("form");
    projectTitleInput = document.createElement("input");
    addProject = document.createElement("button");

    // adding classes
    switchingContainer.classList.add("switching-container");
    projectTitleInput.classList.add("project-title-input");
    addProject.classList.add("project-add-btn");

    // input names
    projectTitleInput.name = "title";

    // input types
    addProject.type = "submit";

    // input placeholders
    projectTitleInput.placeholder = "Project title...";

    // inner text
    addProject.innerText = "Add";

    // appending
    realContainer.appendChild(switchingContainer);
    switchingContainer.appendChild(projectForm);
    projectForm.appendChild(projectTitleInput);
    projectForm.appendChild(addProject);
  };

  const createNotesInputInterface = () => {
    // create elements
    switchingContainer = document.createElement("div");
    notesForm = document.createElement("form");
    noteTitleInput = document.createElement("input");
    noteDetailsInput = document.createElement("textarea");
    addNote = document.createElement("button");

    // adding classes
    switchingContainer.classList.add("switching-container");
    noteTitleInput.classList.add("notes-title-input");
    noteDetailsInput.classList.add("notes-details-input");
    addNote.classList.add("notes-add-btn");

    // input names
    noteTitleInput.name = "title";
    noteDetailsInput.name = "details";

    // input placeholders
    noteTitleInput.placeholder = "Note title...";
    noteDetailsInput.placeholder = "Complete details...";

    // input types
    addNote.type = "submit";

    // inner text
    addNote.innerText = "Add";

    // appending
    realContainer.appendChild(switchingContainer);
    switchingContainer.appendChild(notesForm);
    notesForm.appendChild(noteTitleInput);
    notesForm.appendChild(noteDetailsInput);
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
        console.log(title, description, dueDate);
        addInfoModule.sendToDoInfo(title, description, dueDate);
      });
    }
    if (projectForm) {
      projectForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = projectForm.elements.title.value;
        console.log(title);
        addInfoModule.sendProjectInfo(title);
      });
    }
    if (notesForm) {
      notesForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = notesForm.elements.title.value;
        const details = notesForm.elements.details.value;
        console.log(title, details);
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
    assignEventListeners();
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
  const openHomeInterface = () => {
    const homeButton = document.querySelector(".home-btn");
    homeButton.addEventListener("click", () => {});
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
