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
                        <li class="list__item">
                          <div class="buttons_container">
                            <button class="project__button project__button--x"></button>
                            <button class="project__button project__button--v"></button>
                          </div
                        </li>
                      </ul>`;
    return desc;
  };

  const projectModal = () => {
    const modal = document.createElement("div");
    const modalTitle = document.createElement("div");
    const modalInput = document.createElement("div");
    const modalButtons = document.createElement("buttons");

    modal.setAttribute("id", "modal");
    modalTitle.innerHTML = `<h2 class="modal__titleText">Create new project</h2><button id="closeModal" class="modal__x">X</button>`;
    modalInput.innerHTML = `<label for="newProjectName">Project name:</label>
                            <input class="input__item" id="newProjectName" name="newProjectName" type="text" required>
                            <label for="newProjectDueDate">Deadline:</label>
                            <input id="newProjectDueDate" class="input__item" type="date" value="2022-01-01">`;
    modalButtons.innerHTML = `<button id="createProject">Create!</button>`;

    modal.classList.add("modal");
    modal.classList.add("modal--hidden");
    modalTitle.classList.add("modal__title");
    modalInput.classList.add("modal__input");
    modalButtons.classList.add("modal__buttons");

    const modalELements = [modalTitle, modalInput, modalButtons];

    modalELements.forEach((e) => modal.appendChild(e));

    return modal;
  };

  return {
    projectItem,
    projectModal,
  };
})();

export default Components;
