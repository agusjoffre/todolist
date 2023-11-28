const selectSidebar = (() => {
  const todayButton = document.querySelector('.today-btn');
  const addSideButton = document.querySelector('#add-side-btn');
  const homeButton = document.querySelector('.home-btn');
  return { addSideButton, homeButton, todayButton };
});

const selectAside = (() => {
  const container = () => {
    const toDoRightContainer = document.querySelector('.todo-right');
    return toDoRightContainer;
  };

  let wrapp;
  const wrapper = () => {
    if (!wrapp) {
      wrapp = document.createElement('div');
      wrapp.classList.add('info-input-wrapper');
      const toDoRightContainer = container();
      toDoRightContainer.appendChild(wrapp);
    }
    return wrapp;
  };

  return { wrapper, container };
});

export {
  selectSidebar, selectAside,
};
