const printProjects = () => {
  const testProjects = [
    {
      name: 'Test project2',
      details: 'Some test details of the project2',
      toDo: [
        {
          name: 'Test To Do2',
          description: 'Test description2',
          dueDate: 0.10276679841897234,
          notes: 'Some testing notes2...',
          check: true,
          projectIndex: 1,
        },
      ],
      note: [
        {
          name: 'Test note2...',
          details: 'Test details2',
        },
      ],
    },
  ];
  const container = document.createElement('div');
  testProjects.forEach((project) => {
    const projectName = document.createElement('div');
    projectName.innerText = project.name;
    const projectDetails = document.createElement('div');
    projectDetails.innerText = project.details;
    const toDoQ = document.createElement('div');
    toDoQ.innerText = project.toDo.length;
    container.appendChild(projectName);
    container.appendChild(projectDetails);
    container.appendChild(toDoQ);
  });
  return container;
};

const aside = document.querySelector('.todo-right');
const button = document.querySelector('.projects-btn');

button.addEventListener('click', () => {
  aside.appendChild(printProjects());
});

export default printProjects;
