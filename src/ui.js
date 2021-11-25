"use strict";

import Todo from "./todo";

const UI = (() => {
  const asidePanel = document.getElementById("aside");
  const addButton = document.getElementById("add");

  const init = () => {
    Todo.loadList();
    // const pageElements = getPageElements();
    assignListeners();
    populateProjects();
  };

  const populateProjects = () => {
    document.querySelectorAll('.aside__project').forEach(e => e.remove());
    for (let project in Todo.list) {
      drawProjectItem(Todo.getProject(project));
    }
  };

  const drawNewProject = () => {
    const projectName = "New Project";
    const dueDate = "30.12.2023";    
    Todo.addProject(projectName, dueDate);
    populateProjects();
  };

  const drawProjectItem = (project) => {
    let projectContainer = createProjectContainer(project);
    let projectTitle = createProjectTitle(project);
    let projectDescription = createProjectDescription(project);

    projectContainer.appendChild(projectTitle);
    projectContainer.appendChild(projectDescription);
    asidePanel.appendChild(projectContainer);
  };

  const loadProject = (e) => {
    let tasks = Todo.getProject(e.target.parentElement.id).tasks;
    console.log(tasks);
    e.target.classList.toggle("project__title--active");
    e.target.nextElementSibling.classList.toggle(
      "project__description--hidden"
    );
  };

  const createProjectTitle = (project) => {
    const title = document.createElement("h2");
    title.classList.add("project__title");
    title.innerText = project.name;
    title.addEventListener("click", loadProject);
    return title;
  };

  const createProjectDescription = (project) => {
    const desc = document.createElement("p");
    desc.classList.add("project__description");
    desc.classList.add("project__description--hidden");
    desc.innerHTML = `<ul> 
                        <li>Duedate: ${project.dueDate}</li>
                        <li>Tasks: ${project.tasks.length}</li>
                      </ul>`;
    return desc;
  };



  const createProjectContainer = (project) => {
    const container = document.createElement("div");
    container.setAttribute("class", "aside__project");
    container.setAttribute(
      "id",
      project.name.replaceAll(" ", "").toLowerCase()
    );
    return container;
  };

  function assignListeners() {
    addButton.addEventListener('click', drawNewProject);
  };

  return {
    init,
  };
})();

export default UI;
