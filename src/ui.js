"use strict";

import Todo from "./todo";
import Components from "./components";
import { el } from "date-fns/locale";

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
    document
      .querySelectorAll(".project__button--x")
      .forEach((e) => e.addEventListener("click", removeProject));
  };

  const drawProjectItem = (project) => {
    const projectItem = Components.projectItem(project);
    asidePanel.appendChild(projectItem);
    projectItem.firstChild.addEventListener("click", toggleProject);
  };

  const drawNewProject = () => {
    openProjectModal();
    addListenersModal();
  };

  const openProjectModal = () => {
    const projectModal = Components.projectModal();
    document.getElementsByTagName("body")[0].appendChild(projectModal);    
    window.getComputedStyle(projectModal).opacity; // To trigger transition after appendChild
    projectModal.classList.toggle("modal--hidden");
  };

  const closeProjectModal = () => {
    const modal = document.getElementById("modal");
    modal.classList.toggle("modal--hidden");    
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
    const projectName = document.getElementById("newProjectName").value;
    const projectDueDate = document.getElementById("newProjectDueDate").value;
    if (
      !Todo.projectExists(projectName) &&
      projectName.replaceAll(" ", "") !== ""
    ) {
      Todo.addProject(projectName, projectDueDate);
      populateProjects();
      closeProjectModal();
      highlightProject(document.getElementById(Todo.list[projectName].name));
    } else {
      projectName.style.borderColor = "red";
    }
  };

  const removeProject = (e) => {
    let currentElement = e.target;
    while (currentElement.className !== "aside__project") {
      currentElement = currentElement.parentNode;
    }
    Todo.deleteProject(currentElement.firstChild.innerText);
    document.querySelector(".details").remove();
    populateProjects();
  };

  const highlightProject = (project) => {    
    hideAllProjects();
    project.childNodes[0].classList.toggle("project__title--active");
    project.childNodes[1].classList.toggle("project__description--hidden");
    openProjectDetails(project.childNodes[0].innerText);
  };

  const hideAllProjects = () => {
    const allProjects = document.querySelectorAll(".aside__project");
    allProjects.forEach((el) => {
      el.childNodes[0].classList.remove("project__title--active");
      el.childNodes[1].classList.add("project__description--hidden");
    });
  };

  const openProjectDetails = (projectName) => {
    if (document.querySelector(".details")) {
      document.querySelector(".details").remove();
    }
    const details = Components.projectDetails(Todo.list[projectName]);
    main.appendChild(details);
  };

  const toggleProject = (e) => {
    highlightProject(e.target.parentNode);
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
