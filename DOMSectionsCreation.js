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
});

const createNotesSection = (() => {});

const createTodaySection = (() => {});

const createWeekSection = (() => {});

export {
  createProjectSection, createNotesSection, createTodaySection, createWeekSection,
};
