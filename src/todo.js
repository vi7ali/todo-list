"use strict";

import Storage from "./storage";
import Project from "./project";
import Task from "./task";

const Todo = (() => {
  let list;

  // Private Methods

  const updateList = () => {
    Storage.storeList(list);
    list = Storage.retrieveList();
  };

  const isValid = (name) => { //Is there a project with the same name?
    for (const project in list) {
      if (project === name) return false;
    }
    return true;
  };

  const createDefaultList = () => {
    const defaultList = {
      project1: Project("Project 1", "tomorrow"),
      project2: Project("Project 2", "tomorrow"),
      project3: Project("Project 3", "tomorrow"),
    };
    const defaultTasks = [
      Task("task1", "1 hour", "Do task 1"),
      Task("task2", "2 hour", "Do task 2"),
      Task("task3", "3 hour", "Do task 3"),
    ];
    for (let project in defaultList) {
      defaultList[project].tasks = defaultTasks;
    }
    return defaultList;
  };

  //Public Methods

  const loadList = () => {
    list = Storage.retrieveList();
    if (list === null) {
      list = createDefaultList();
      updateList();
    }
  };

  const getProject = (name) => list[name];

  const addProject = (name, dueDate) => {
    let projName = name.replaceAll(" ", "").toLowerCase();
    if (isValid(projName)) {
      const newProject = Project(name, dueDate);
      list[projName] = newProject;
      updateList();
    } else {
      console.log("Duplicated name");
    }
  };

  const deleteProject = (name) => {
    for (const project in list) {
      if (project === name) {
        delete list[project];
        updateList();
        return;
      }
    }
  };

  const addTask = (project, task) => {
    list[project].tasks.push(task);
    updateList();
  };

  const deleteTask = (project, task) => {
    const index = list[project].tasks.findIndex((el) => el.name === task);
    if (index !== -1) {
      list[project].tasks.splice(index, 1);
      updateList();
    }
  };

  return {
    get list() {
      return list;
    },
    loadList,
    getProject,
    addProject,
    deleteProject,
    addTask,
    deleteTask,
  };
})();

export default Todo;
