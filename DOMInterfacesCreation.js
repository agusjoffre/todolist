import { selectAside } from './DOMMain';

const createInterface = (() => {
  const container = () => {
    const containerOfContainers = document.createElement('div');
    containerOfContainers.classList.add('info-input-container');
    return containerOfContainers;
  };

  const heading = () => {
    const containerTitle = document.createElement('p');
    containerTitle.classList.add('info-input-container-title');
    containerTitle.innerText = 'Create a new...';
    return containerTitle;
  };

  const box = () => {
    const realContainer = document.createElement('div');
    realContainer.classList.add('info-input-container-container');
    return realContainer;
  };

  const boxTopDiv = () => {
    const top = document.createElement('div');
    top.classList.add('info-input-top');
    return top;
  };

  const topToDoBtn = () => {
    const topToDo = document.createElement('button');
    topToDo.classList.add('info-input-top-btn');
    topToDo.classList.add('info-input-top-todo-btn');
    topToDo.innerText = 'To Do';
    return topToDo;
  };

  const topProjectBtn = () => {
    const topProject = document.createElement('button');
    topProject.classList.add('info-input-top-btn');
    topProject.classList.add('info-input-top-project-btn');
    topProject.innerText = 'Project';
    return topProject;
  };

  const topNotesBtn = () => {
    const topNotes = document.createElement('button');
    topNotes.classList.add('info-input-top-btn');
    topNotes.classList.add('info-input-top-notes-btn');
    topNotes.innerText = 'Note';
    return topNotes;
  };

  const switchingContainer = () => {
    const swContainer = document.createElement('div');
    swContainer.classList.add('switching-container');
    return swContainer;
  };

  // ayudin...
  const createAll = () => ({
    container: container(),
    heading: heading(),
    box: box(),
    boxTopDiv: boxTopDiv(),
    topToDoBtn: topToDoBtn(),
    topProjectBtn: topProjectBtn(),
    topNotesBtn: topNotesBtn(),
    switchingContainer: switchingContainer(),
  });

  const appendAll = () => {
    const wrapper = selectAside.wrapper();
    // nombre estandar (elements)
    const elements = createAll();
    wrapper.appendChild(elements.container);
    elements.container.appendChild(elements.heading);
    elements.container.appendChild(elements.box);
    elements.box.appendChild(elements.boxTopDiv);
    elements.boxTopDiv.appendChild(elements.topToDoBtn);
    elements.boxTopDiv.appendChild(elements.topProjectBtn);
    elements.boxTopDiv.appendChild(elements.topNotesBtn);
    elements.box.appendChild(elements.switchingContainer);
  };

  return {
    createAll, appendAll, switchingContainer,
  };
});

const createToDoInterface = (() => {
  const toDoForm = () => {
    const form = document.createElement('form');
    return form;
  };

  const titleInput = () => {
    const input = document.createElement('input');
    input.classList.add('todo-title-input');
    input.placeholder = 'Title...';
    input.name = 'title';
    return input;
  };

  const descriptionInput = () => {
    const textarea = document.createElement('textarea');
    textarea.classList.add('todo-description-input');
    textarea.placeholder = 'Complete details...';
    textarea.name = 'description';
    return textarea;
  };

  const bottomWrapper = () => {
    const container = document.createElement('div');
    container.classList.add('todo-bottom');
    return container;
  };

  const bottomLeft = () => {
    const container = document.createElement('div');
    container.classList.add('todo-bottom');
    return container;
  };

  const dueDateLabel = () => {
    const label = document.createElement('p');
    label.classList.add('todo-duedate-title');
    label.innerText = 'Due date: ';
    return label;
  };

  const dueDateInput = () => {
    const input = document.createElement('input');
    input.classList.add('todo-duedate-input');
    input.name = 'dueDate';
    input.type = 'date';
    return input;
  };

  const bottomRight = () => {
    const container = document.createElement('div');
    container.classList.add('todo-bottom-right');
    return container;
  };

  const addBtn = () => {
    const button = document.createElement('button');
    button.classList.add('todo-add-button');
    button.type = 'submit';
    button.innerText = 'Add';
    return button;
  };

  const createAll = () => ({
    form: toDoForm(),
    titleInput: titleInput(),
    descriptionInput: descriptionInput(),
    bottomWrapper: bottomWrapper(),
    bottomLeft: bottomLeft(),
    dueDateLabel: dueDateLabel(),
    dueDateInput: dueDateInput(),
    bottomRight: bottomRight(),
    addBtn: addBtn(),
  });

  const appendAll = () => {
    const { switchingContainer } = createInterface;
    const elements = createAll();
    switchingContainer.appendChild(elements.form);
    elements.form.appendChild(elements.titleInput);
    elements.form.appendChild(elements.descriptionInput);
    elements.form.appendChild(elements.bottomWrapper);
    elements.bottomWrapper.appendChild(elements.bottomLeft);
    elements.bottomLeft.appendChild(elements.dueDateLabel);
    elements.bottomLeft.appendChild(elements.dueDateInput);
    elements.bottomWrapper.appendChild(elements.bottomRight);
    elements.bottomRight.appendChild(elements.addBtn);
  };

  return { createAll, appendAll };
});

const createProjectInterface = (() => {
  const projectForm = () => {
    const form = document.createElement('form');
    return form;
  };

  const titleInput = () => {
    const input = document.createElement('input');
    input.classList.add('project-title-input');
    input.name = 'title';
    input.placeholder = 'Project title...';
    return input;
  };

  const addProjectButton = () => {
    const button = document.createElement('button');
    button.classList.add('project-add-btn');
    button.type = 'submit';
    button.innerText = 'Add';
    return button;
  };
  const createAll = () => ({
    form: projectForm(),
    titleInput: titleInput(),
    addProjectButton: addProjectButton(),
  });

  const appendAll = () => {
    const { switchingContainer } = createInterface;
    const elements = createAll();
    switchingContainer.appendChild(elements.form);
    elements.form.appendChild(elements.titleInput);
    elements.form.appendChild(elements.addProjectButton);
  };
  return { createAll, appendAll };
});

const createNoteInterface = () => {
  const notesForm = () => {
    const form = document.createElement('form');
    return form;
  };

  const titleInput = () => {
    const input = document.createElement('input');
    input.classList.add('notes-title-input');
    input.name = 'title';
    input.placeholder = 'Note title...';
    return input;
  };

  const detailsInput = () => {
    const textarea = document.createElement('textarea');
    textarea.classList.add('notes-details-input');
    textarea.name = 'details';
    textarea.placeholder = 'Complete details...';
    return textarea;
  };

  const addButton = () => {
    const button = document.createElement('button');
    button.classList.add('notes-add-btn');
    button.type = 'submit';
    button.innerText = 'Add';
    return button;
  };
  const createAll = () => ({
    form: notesForm(),
    titleInput: titleInput(),
    detailsInput: detailsInput(),
    addButton: addButton(),
  });

  const appendAll = () => {
    const { switchingContainer } = createInterface;
    const elements = createAll();
    switchingContainer.appendChild(elements.form);
    elements.form.appendChild(elements.titleInput);
    elements.form.appendChild(elements.detailsInput);
    elements.form.appendChild(elements.addButton);
  };

  return { createAll, appendAll };
};

export {
  createInterface, createToDoInterface, createProjectInterface, createNoteInterface,
};
