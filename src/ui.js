"use strict";

import Todo from "./todo";
import Components from "./components";
import { el } from "date-fns/locale";

const UI = (() => {
  const asidePanel = document.getElementById("aside");
  const addButton = document.getElementById("add");
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
    document
      .querySelectorAll(".project__button--v")
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
      document.getElementById("newProjectName").style.borderColor = "red";
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
    const projectDetails = document.querySelector(".details");
    if (projectDetails) {
      projectDetails.remove();
    }
    const newDetails = Components.projectDetails(Todo.list[projectName]);
    main.appendChild(newDetails);

    addListenersDetails();
  };

  const addListenersDetails = () => {
    const vButtons = document.querySelectorAll(".task__button ");
    const addTaskButton = document.querySelector(".tasks__add");

    addTaskButton.addEventListener("click", addTask);

    if (vButtons) {
      vButtons.forEach((e) => e.addEventListener("click", deleteTask));
    }
  };

  const addTask = (e) => {
    //TODO
  };

  const deleteTask = (e) => {
    const projName = Todo.getProject(
      document.querySelector(".details__title").innerText
    );
    const taskName = e.target.id;
    Todo.deleteTask(projName.name, taskName);
    populateProjects();
    highlightProject(
      document.getElementById(
        Todo.list[projName.name].name.replaceAll(" ", "").toLowerCase()
      )
    );
    openProjectDetails(projName.name);
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
