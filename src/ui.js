"use strict";

import Todo from "./todo";
import Components from "./components"

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

  const removeProject = (name) => {
    Todo.deleteProject(name);
    populateProjects();
  };

  const drawProjectItem = (project) => {
    let projectContainer = Components.projectContainer(project);
    let projectTitle = Components.projectTitle(project);    
    let projectDescription = Components.projectDescription(project);

    projectContainer.appendChild(projectTitle);
    projectContainer.appendChild(projectDescription);
    asidePanel.appendChild(projectContainer);

    projectTitle.addEventListener("click", loadProject);
  };

  const loadProject = (e) => {    
    e.target.classList.toggle("project__title--active");
    e.target.nextElementSibling.classList.toggle(
      "project__description--hidden"
    );
  };

  function assignListeners() {
    addButton.addEventListener('click', drawNewProject);
  };

  return {
    init,
    drawNewProject,
    removeProject
  };
})();

export default UI;
