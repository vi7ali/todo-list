"use strict";

import Todo from "./todo";
import Components from "./components";
import { el } from "date-fns/locale";

const UI = (() => {

  // Private

  const asidePanel = document.getElementById("aside");
  const addButton = document.getElementById("add");
  const main = document.getElementById("main");

  const populateProjects = () => {
    removeListenersAside();
    document.querySelectorAll(".aside__project").forEach((e) => e.remove());
    for (let project in Todo.list) {
      drawProjectItem(Todo.getProject(project));
    }
    addListenersAside();
  };

  const addProject = () => {
    const projectName = document.getElementById("newProjectName").value;
    const projectDueDate = document.getElementById("newProjectDueDate").value;

    if (projectName.replaceAll(" ", "") !== "" && !Todo.projectExists(projectName)) {
      Todo.addProject(projectName, projectDueDate);
      populateProjects();
      closeModal();
      highlightProject(Todo.getProject(projectName));
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
    removeListenersDetails();
    document.querySelector(".details").remove();
    populateProjects();
  };

  const addTask = () => {
    const taskName = document.getElementById("newTaskName").value;
    const taskDueDate = document.getElementById("newTaskDueDate").value;
    const taskDescription = document.getElementById("taskDescription").value;
    const project = Todo.getProject(
      document.querySelector(".details__title").innerText
    );

    if (taskName.replaceAll(" ", "") !== "") {
      Todo.addTask(project, taskName, taskDueDate, taskDescription);
      closeModal();
      populateProjects();
      highlightProject(project);
    } else {
      document.getElementById("newTaskName").style.borderColor = "red";
    }
  };

  const removeTask = (e) => {
    const proj = Todo.getProject(
      document.querySelector(".details__title").innerText
    );    
    const task = Todo.getTask(proj, e.target.id);

    Todo.deleteTask(proj, task.name);
    populateProjects();
    highlightProject(proj);
    openProjectDetails(proj);
  };

  const highlightProject = (project) => {
    const projectNode = document.getElementById(project.id);
    hideAllProjects();
    projectNode.childNodes[0].classList.toggle("project__title--active");
    projectNode.childNodes[1].classList.toggle("project__description--hidden");
    openProjectDetails(project);
  };

  const drawProjectItem = (project) => {
    const projectItem = Components.createProjectItem(project);
    asidePanel.appendChild(projectItem);
  };

  const drawNewProject = () => {
    openModal("Project");
    addListenersModal("Project");
  };

  const drawNewTask = () => {
    openModal("Task");
    addListenersModal("Task");
  };

  const openModal = (category) => {
    const modal = Components.createModal(category);
    document.getElementsByTagName("body")[0].appendChild(modal);
    window.getComputedStyle(modal).opacity; // To trigger transition after appendChild
    modal.classList.toggle("modal--hidden");
  };

  const closeModal = () => {
    const modal = document.getElementById("modal");    
    window.getComputedStyle(modal).backgroundColor; // To trigger transition after appendChild
    modal.classList.toggle("modal--hidden");    
    removeListenersModal();
    modal.remove();
  };

  const hideAllProjects = () => {
    const allProjects = document.querySelectorAll(".aside__project");
    allProjects.forEach((el) => {
      el.childNodes[0].classList.remove("project__title--active");
      el.childNodes[1].classList.add("project__description--hidden");
    });
  };

  const openProjectDetails = (project) => {
    const projectDetails = document.querySelector(".details");
    if (projectDetails) {
      removeListenersDetails();
      projectDetails.remove();
    }
    const newDetails = Components.createProjectDetails(project);
    main.appendChild(newDetails);
    addListenersDetails();
  };

  const toggleProject = (e) => {    
    const proj = Todo.getProject(e.target.innerText);
    highlightProject(proj);
  };

  const addListenersAside = () => {
    addButton.addEventListener("click", drawNewProject);
    document.querySelectorAll(".project__title").forEach((proj) => {
      proj.addEventListener("click", toggleProject);
    });
    document.querySelectorAll(".project__button--x").forEach((but) => {
      but.addEventListener("click", removeProject);
    });
    document.querySelectorAll(".project__button--v").forEach((but) => {
      but.addEventListener("click", removeProject);
    });    
  };

  const removeListenersAside = () => {
    addButton.removeEventListener("click", drawNewProject);
    document.querySelectorAll(".project__title").forEach((proj) => {
      proj.removeEventListener("click", toggleProject);
    });
    document.querySelectorAll(".project__button--x").forEach((but) => {
      but.removeEventListener("click", removeProject);
    });
    document.querySelectorAll(".project__button--v").forEach((but) => {
      but.removeEventListener("click", removeProject);
    });
  };

  const addListenersModal = (category) => {
    document.getElementById("closeModal").addEventListener("click", closeModal);

    if (category === "Project") {
      document
        .getElementById("createProject")
        .addEventListener("click", addProject);
    } else if (category === "Task") {
      document.getElementById("createTask").addEventListener("click", addTask);
    }
  };

  const removeListenersModal = () => {
    document
      .getElementById("closeModal")
      .removeEventListener("click", closeModal);

    document
      .querySelector(".modal__buttons")
      .childNodes[0].removeEventListener("click", addProject);
  };

  const addListenersDetails = () => {
    const vButtons = document.querySelectorAll(".task__button ");
    const addTaskButton = document.querySelector(".tasks__add");

    addTaskButton.addEventListener("click", drawNewTask);

    if (vButtons) {
      vButtons.forEach((e) => e.addEventListener("click", removeTask));
    }
  };

  const removeListenersDetails = () => {
    const vButtons = document.querySelectorAll(".task__button ");
    const addTaskButton = document.querySelector(".tasks__add");

    addTaskButton.removeEventListener("click", drawNewTask);

    if (vButtons) {
      vButtons.forEach((e) => e.removeEventListener("click", removeTask));
    }
  };

  // Public

  const init = () => {
    Todo.loadList();
    populateProjects();    
  };

  return {
    init
  };
})();

export default UI;
