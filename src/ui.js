"use strict";

import Todo from "./todo";
import Components from "./components";

const UI = (() => {
  const asidePanel = document.getElementById("aside");
  const addButton = document.getElementById("add");
  const page = document.getElementById("page");
  const main = document.getElementById("main");

  const init = () => {
    Todo.loadList();
    assignListeners();
    populateProjects();
  };

  const populateProjects = () => {
    document.querySelectorAll(".aside__project").forEach((e) => e.remove());
    for (let project in Todo.list) {
      drawProjectItem(Todo.getProject(project));
    }
  };

  const drawProjectItem = (project) => {
    const projectItem = Components.projectItem(project);
    asidePanel.appendChild(projectItem);
    projectItem.addEventListener("click", toggleProject);
  };

  const drawNewProject = () => {
    openProjectModal();
    addListenersModal();
  };

  const openProjectModal = () => {
    const projectModal = Components.projectModal();
    document.getElementsByTagName("body")[0].appendChild(projectModal);
    page.classList.toggle("page--opaque");
    window.getComputedStyle(projectModal).opacity; // To trigger transition after appendChild
    projectModal.classList.toggle("modal--hidden");
  };

  const closeProjectModal = () => {
    const modal = document.getElementById("modal");
    modal.classList.toggle("modal--hidden");
    page.classList.toggle("page--opaque");
    removeListenersModal();
    modal.remove();
  };

  const addListenersModal = () => {
    document
      .getElementById("closeModal")
      .addEventListener("click", closeProjectModal);
    document
      .getElementById("createProject")
      .addEventListener("click", addProject);
  };

  const removeListenersModal = () => {
    document
      .getElementById("closeModal")
      .removeEventListener("click", closeProjectModal);
    document
      .getElementById("createProject")
      .removeEventListener("click", addProject);
  };

  const addProject = () => {
    const projectName = document.getElementById("newProjectName");
    const projectDueDate = document.getElementById("newProjectDueDate");
    if (!Todo.projectExists(projectName.value) && projectName.value !== "") {
      Todo.addProject(projectName.value, projectDueDate.value);
      populateProjects();
      closeProjectModal();
    } else {
      projectName.style.borderColor = "red";
    }
  };

  const removeProject = (name) => {
    Todo.deleteProject(name);
    populateProjects();
  };

  const toggleProject = (e) => {
    e.target.classList.toggle("project__title--active");
    e.target.nextElementSibling.classList.toggle(
      "project__description--hidden"
    );
  };

  function assignListeners() {
    addButton.addEventListener("click", drawNewProject);
  }

  return {
    init,
    drawNewProject,
    removeProject,
  };
})();

export default UI;
