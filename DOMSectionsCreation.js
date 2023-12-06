import { selectAside } from './DOMMain';

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

  const projectTitle = (projectName) => {
    const title = document.createElement('h1');
    title.classList.add('project-card-title');
    title.innerText = projectName;
    return title;
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
    const detail = document.createElement('p');
    detail.classList.add('project-card-details');
    detail.innerText = details;
    return detail;
  };

  const createAll = () => ({
    projCard: projCard(),
    topDiv: topDiv(),
    bottomDiv: bottomDiv(),
    detailsLabel: detailsLabel(),
  });

  const appendAll = (name, todoq, details) => {
    const elements = createAll();
    wrapper().appendChild(elements.projCard);
    elements.projCard.appendChild(elements.topDiv);
    elements.topDiv.appendChild(projectTitle(name));
    elements.topDiv.appendChild(toDoCounter(todoq));
    elements.bottomDiv.appendChild(elements.detailsLabel);
    elements.bottomDiv.appendChild(detailsP(details));
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

  const noteName = (name) => {
    const title = document.createElement('h1');
    title.classList.add('note-card-title');
    title.innerText = name;
    return title;
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
  });

  const appendAll = (name, details) => {
    const elements = createAll();
    wrapper().appendChild(elements.noteCard);
    elements.noteCard.appendChild(noteName(name));
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

  const leftCard = () => {
    const left = document.createElement('div');
    left.classList.add('.left-card');
    return left;
  };

  const checkButton = () => {
    const button = document.createElement('button');
    button.classList.add('.check-card-btn');
    return button;
  };

  const toDoName = (name) => {
    const title = document.createElement('p');
    title.classList.add('#todo-name');
    title.innerText = name;
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
    const button = document.createElement('button');
    button.classList.add('card-date-btn');
    button.innerText = dueDate;
    return button;
  };

  const cardEditButton = () => {
    const button = document.createElement('button');
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

  const createAll = () => ({
    cardWrapper: cardWrapper(),
    leftCard: leftCard(),
    checkButton: checkButton(),
    toDoName: toDoName(),
    rightCard: rightCard(),
    cardDetailsButton: cardDetailsButton(),
    cardDateButton: cardDateButton(),
    cardEditButton: cardEditButton(),
    cardDeleteButton: cardDeleteButton(),
  });

  const appendAll = (name, dueDate) => {
    const elements = createAll();
    const { wrapper } = selectAside();
    // const wrapp = document.querySelector('.info-input-wrapper');
    wrapper().appendChild(elements.cardWrapper);
    elements.cardWrapper.appendChild(elements.leftCard);
    elements.leftCard.appendChild(elements.checkButton);
    elements.leftCard.appendChild(toDoName(name));
    elements.cardWrapper.appendChild(elements.rightCard);
    elements.rightCard.appendChild(elements.cardDetailsButton);
    elements.rightCard.appendChild(cardDateButton(dueDate));
    elements.rightCard.appendChild(elements.cardEditButton);
    elements.rightCard.appendChild(cardDeleteButton());
  };

  return { createAll, appendAll };
};
const createTodaySection = (() => {});

const createWeekSection = (() => {});

export {
  // eslint-disable-next-line max-len
  createProjectSection, createNotesSection, createTodaySection, createWeekSection, createToDoSection,
};
