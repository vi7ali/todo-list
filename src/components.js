"use strict";

const Components = (() => {
  const projectItem = (project) => {
    const projectC = projectContainer(project);
    const projectT = projectTitle(project);
    const projectD = projectDescription(project);    

    projectC.appendChild(projectT);
    projectC.appendChild(projectD);    

    return projectC;
  };

  const projectContainer = (project) => {
    const container = document.createElement("div");
    container.classList.add("aside__project");
    container.setAttribute(
      "id",
      project.name.replaceAll(" ", "").toLowerCase()
    );
    return container;
  };

  const projectTitle = (project) => {
    const title = document.createElement("h2");
    title.classList.add("project__title");
    title.innerText = project.name;
    return title;
  };

  const projectDescription = (project) => {
    const desc = document.createElement("p");
    const buttons = descriptionButtons()
    desc.classList.add("project__description");
    desc.classList.add("project__description--hidden");
    desc.innerHTML = `<ul class="project__list"> 
                        <li class="list__item">
                          <span>Duedate:</span> 
                          <span>${project.dueDate}</span>
                        </li>
                        <li class="list__item">
                          <span>Tasks: </span>
                          <span>${project.tasks.length}</span>
                        </li>                        
                      </ul>`;
    desc.appendChild(buttons);
    return desc;
  };

  const descriptionButtons = () => {
    const buttons = document.createElement("div");
    const vButton = document.createElement("button");
    const xButton = document.createElement("button");

    buttons.classList.add("buttons_container");
    vButton.classList.add("project__button");
    xButton.classList.add("project__button");
    vButton.classList.add("project__button--v");
    xButton.classList.add("project__button--x");

    buttons.appendChild(xButton);
    buttons.appendChild(vButton);    

    return buttons;
  };

  const projectModal = () => {
    const modalBackground = document.createElement("div");
    const modal = document.createElement("div");
    const modalTitle = document.createElement("div");
    const modalInput = document.createElement("div");
    const modalButtons = document.createElement("buttons");

    modalBackground.setAttribute("id", "modal");
    modalTitle.innerHTML = `<h2 class="modal__titleText">Create new project</h2><button id="closeModal" class="modal__x">X</button>`;
    modalInput.innerHTML = `<label for="newProjectName">Project name:</label>
                            <input class="input__item" id="newProjectName" name="newProjectName" type="text" required>
                            <label for="newProjectDueDate">Deadline:</label>
                            <input id="newProjectDueDate" class="input__item" type="date" value="2022-01-01">`;

    modalButtons.innerHTML = `<button id="createProject">Create!</button>`;

    modalBackground.classList.add("modal__background");
    modalBackground.classList.add("modal--hidden");
    modal.classList.add("modal");    
    modalTitle.classList.add("modal__title");
    modalInput.classList.add("modal__input");
    modalButtons.classList.add("modal__buttons");

    const modalELements = [modalTitle, modalInput, modalButtons];

    modalELements.forEach((e) => modal.appendChild(e));
    modalBackground.appendChild(modal);

    return modalBackground;
  };

  const createTask = (task) => {
    const taskCard = document.createElement('div');
    const taskName = document.createElement('div');
    const taskDate = document.createElement('div');
    const taskDesc = document.createElement('div');
    const vButton = document.createElement("button");    
    
    taskName.innerText = task.name;
    taskDate.innerText = `Due Date: ${task.dueDate}`;
    taskDesc.innerText = `Description: ${task.description}`;

    taskName.classList.add('task__name');
    taskDate.classList.add('task__date');
    taskDesc.classList.add('task__desc');
    taskCard.classList.add('task__container');
    vButton.classList.add("project__button");    
    vButton.classList.add("task__button");
    
    vButton.setAttribute('id', `${task.name}`);

    taskCard.appendChild(taskName);
    taskCard.appendChild(taskDate);
    taskCard.appendChild(taskDesc);
    taskCard.appendChild(vButton);

    

    return taskCard;
  };

  const createTasksGrid = (tasks) => {
    const tasksGrid = document.createElement("div");    

    tasksGrid.classList.add("tasks__grid");
    
    for (let i=0; i<tasks.length; i++) {      
      let task = createTask(tasks[i]);
      tasksGrid.appendChild(task);      
    };    

    return tasksGrid;
  };

  const tasksDetails = (tasks) => {
    const tasksContainer = document.createElement("div");
    const tasksTitle = document.createElement("h3");
    const tasksGrid = createTasksGrid(tasks);
    const newTask = document.createElement("button");

    tasksContainer.classList.add("tasks");
    newTask.classList.add("aside__add");
    newTask.classList.add("tasks__add");    

    tasksTitle.innerText = `Tasks: ${tasks.length}`;
    newTask.innerText = `+`;

    tasksContainer.appendChild(tasksTitle);
    tasksContainer.appendChild(newTask);
    tasksContainer.appendChild(tasksGrid);

    return tasksContainer;
  };

  const projectDetails = (project) => {
    const details = document.createElement("div");
    const detailsContainer = document.createElement("div");
    const detailsProjectTitle = document.createElement("h2");
    const detailsDueDate = document.createElement("p");
    const tasksContainer = tasksDetails(project.tasks);

    details.classList.add("details");
    detailsContainer.classList.add("details__container");
    detailsProjectTitle.classList.add("details__title");
    detailsDueDate.classList.add("details__date");

    detailsProjectTitle.innerText = project.name;
    detailsDueDate.innerText = `Due date: ${project.dueDate}`;

    detailsContainer.appendChild(detailsProjectTitle);
    detailsContainer.appendChild(detailsDueDate);
    detailsContainer.appendChild(tasksContainer);

    details.appendChild(detailsContainer);

    return details;
  };

  return {
    projectItem,
    projectModal,
    projectDetails
  };
})();

export default Components;