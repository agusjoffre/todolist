import { selectAside } from './DOMMain';
import { ToDoCreationlogicModule } from './main';

const { wrapper } = selectAside();

const createProjectSection = (() => {
  const projCard = () => {
    const card = document.createElement('div');
    card.classList.add('project-card-wrapper');
    return card;
  };

  const topDiv = () => {
    const top = document.createElement('div');
    top.classList.add('project-card-top');
    return top;
  };

  const createForm = () => {
    const form = document.createElement('form');
    form.classList.add('project-section-form');
    return form;
  };

  const projectTitle = (projectName) => {
    const title = document.createElement('input');
    title.classList.add('project-card-title');
    title.value = projectName;
    return title;
  };

  const deleteButton = () => {
    const button = document.createElement('button');
    button.classList.add('project-card-delete');
    button.innerText = 'X';
    return button;
  };

  const toDoCounter = (toDoQ) => {
    const text = document.createElement('p');
    text.classList.add('project-card-todoQ');
    text.innerText = `To dos: ${toDoQ}`;
    return text;
  };

  const bottomDiv = () => {
    const bottom = document.createElement('div');
    bottom.classList.add('project-card-bottom');
    return bottom;
  };

  const detailsLabel = () => {
    const label = document.createElement('p');
    label.classList.add('project-card-details-label');
    label.innerText = 'Details: ';
    return label;
  };

  const detailsP = (details) => {
    const detail = document.createElement('input');
    detail.classList.add('project-card-details');
    detail.innerHTML = details;
    return detail;
  };

  const createEditButton = () => {
    const button = document.createElement('button');
    button.type = 'submit';
    button.classList.add('project-section-edit-btn');
    button.innerHTML = 'Edit';
    return button;
  };

  const createAll = () => ({
    projCard: projCard(),
    topDiv: topDiv(),
    bottomDiv: bottomDiv(),
    detailsLabel: detailsLabel(),
    createForm: createForm(),
    createEditButton: createEditButton(),
  });

  const appendAll = (name, todoq, details) => {
    const elements = createAll();
    wrapper().appendChild(elements.projCard);
    elements.projCard.appendChild(elements.createForm);
    elements.createForm.appendChild(elements.topDiv);
    elements.topDiv.appendChild(projectTitle(name));
    elements.topDiv.appendChild(toDoCounter(todoq));
    elements.topDiv.appendChild(deleteButton());
    elements.bottomDiv.appendChild(elements.detailsLabel);
    elements.bottomDiv.appendChild(detailsP(details));
    elements.bottomDiv.appendChild(createEditButton());
  };

  return {
    createAll, appendAll, projectTitle, detailsP, toDoCounter,
  };
});

const createNotesSection = (() => {
  const noteCard = () => {
    const card = document.createElement('div');
    card.classList.add('note-card-wrapper');
    return card;
  };

  const createTopDiv = () => {
    const div = document.createElement('div');
    div.classList.add('note-card-top-div');
    return div;
  };

  const noteName = (name) => {
    const title = document.createElement('h1');
    title.classList.add('note-card-title');
    title.innerText = name;
    return title;
  };

  const deleteButton = () => {
    const button = document.createElement('button');
    button.classList.add('note-card-delete-btn');
    button.innerText = 'X';
    return button;
  };

  const detailP = (details) => {
    const detail = document.createElement('p');
    detail.classList.add('note-card-details');
    detail.innerText = details;
    return detail;
  };

  const createAll = () => ({
    noteCard: noteCard(),
    noteName: noteName(),
    detailP: detailP(),
    topDiv: createTopDiv(),
  });

  const appendAll = (name, details) => {
    const elements = createAll();
    wrapper().appendChild(elements.noteCard);
    elements.noteCard.appendChild(elements.topDiv);
    elements.topDiv.appendChild(noteName(name));
    elements.topDiv.appendChild(deleteButton());
    elements.noteCard.appendChild(detailP(details));
  };

  return { createAll, appendAll };
});

const createToDoSection = () => {
  const cardWrapper = () => {
    const card = document.createElement('div');
    card.classList.add('.card-wrapper');
    return card;
  };

  const createForm = () => {
    const form = document.createElement('form');
    form.classList.add('todo-section-form');
    return form;
  };

  const leftCard = () => {
    const left = document.createElement('div');
    left.classList.add('left-card');
    return left;
  };

  const checkButton = (check) => {
    const button = document.createElement('button');
    button.classList.add('check-card-btn');
    if (check === true) {
      button.classList.add('check-btn-true');
    }
    if (check === false) {
      button.classList.remove('check-btn-true');
    }
    return button;
  };

  const toDoName = (name) => {
    const title = document.createElement('input');
    title.classList.add('todo-name');
    title.value = name;
    return title;
  };

  const rightCard = () => {
    const right = document.createElement('div');
    right.classList.add('right-card');
    return right;
  };

  const cardDetailsButton = () => {
    const button = document.createElement('button');
    button.classList.add('card-detail-btn');
    button.innerText = 'DETAILS';
    return button;
  };

  const cardDateButton = (dueDate) => {
    const button = document.createElement('input');
    button.classList.add('card-date-btn');
    button.type = 'date';
    button.innerHTML = dueDate;
    return button;
  };

  const cardEditButton = () => {
    const button = document.createElement('button');
    button.type = 'submit';
    button.classList.add('card-edit-btn');
    button.innerText = 'Edit';
    return button;
  };

  const cardDeleteButton = () => {
    const button = document.createElement('button');
    button.classList.add('card-delete-btn');
    button.innerText = 'X';
    return button;
  };

  const createAll = (check) => ({
    cardWrapper: cardWrapper(),
    leftCard: leftCard(),
    checkButton: checkButton(check),
    toDoName: toDoName(),
    rightCard: rightCard(),
    cardDetailsButton: cardDetailsButton(),
    cardDateButton: cardDateButton(),
    cardEditButton: cardEditButton(),
    cardDeleteButton: cardDeleteButton(),
    createForm: createForm(),
  });

  const appendAll = (name, dueDate, check) => {
    const elements = createAll(check);
    // const { wrapper } = selectAside();
    // const wrapp = document.querySelector('.info-input-wrapper');
    wrapper().appendChild(elements.cardWrapper);
    elements.cardWrapper.appendChild(elements.createForm);
    elements.createForm.appendChild(elements.leftCard);
    elements.leftCard.appendChild(checkButton(check));
    elements.leftCard.appendChild(toDoName(name));
    elements.createForm.appendChild(elements.rightCard);
    elements.rightCard.appendChild(elements.cardDetailsButton);
    elements.rightCard.appendChild(cardDateButton(dueDate));
    elements.rightCard.appendChild(elements.cardEditButton);
    elements.rightCard.appendChild(cardDeleteButton());
  };

  return { createAll, appendAll, checkButton };
};
const createTodaySection = (() => {});

const createWeekSection = (() => {});

export {
  // eslint-disable-next-line max-len
  createProjectSection, createNotesSection, createTodaySection, createWeekSection, createToDoSection,
};
