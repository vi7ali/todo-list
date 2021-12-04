"use strict";

const Components = (() => {
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

  return {
    projectContainer,
    projectDescription,
    projectTitle,
  };
})();

export default Components;
