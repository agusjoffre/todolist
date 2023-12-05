const selectSidebar = (() => {
  const todayButton = document.querySelector('.today-btn');
  const addSideButton = document.querySelector('#add-side-btn');
  const homeButton = document.querySelector('.home-btn');
  return { addSideButton, homeButton, todayButton };
});

const selectAside = (() => {
  const selectContainer = () => {
    const toDoRightContainer = document.querySelector('.todo-right');
    return toDoRightContainer;
  };

  const createWrapper = () => {
    let wrapper = document.querySelector('.info-input-wrapper');
    if (!wrapper) {
      wrapper = document.createElement('div');
      wrapper.classList.add('info-input-wrapper');
      const toDoRightContainer = selectContainer();
      toDoRightContainer.appendChild(wrapper);
    } return wrapper;
  };

  return { wrapper: createWrapper, container: selectContainer };
});

export {
  selectSidebar, selectAside,
};
