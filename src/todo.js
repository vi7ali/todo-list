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

  const createDefaultList = () => {
    const defaultList = {
      "Project 1": Project("Project 1", "tomorrow"),
      "Project 2": Project("Project 2", "tomorrow"),
      "Project 3": Project("Project 3", "tomorrow"),
    };
    const defaultTasks = [
      Task("Task 1", "1 hour", "Do task 1"),
      Task("Task 2", "2 hour", "Do task 2"),
      Task("Task 3", "3 hour", "Do task 3"),
    ];
    for (let project in defaultList) {
      defaultList[project].tasks = defaultTasks;
    }
    return defaultList;
  };

  const projectExists = (project) => {
    if (list[project]) return true;
    return false;
  };

  const taskExists = (project, task) => {
    if (list[project].tasks.some((t) => t === task)) return true;
    return false;
  };

  //Public Methods

  const loadList = () => {
    list = Storage.retrieveList();
    if (!list) {
      list = createDefaultList();
      updateList();
    }
  };

  const getProject = (name) => {
    return list[name];
  };

  const addProject = (name, dueDate) => {
    if (!projectExists(name)) {
      list[name] = Project(name, dueDate);
      updateList();
    }
  };

  const deleteProject = (project) => {
    if (projectExists(project)) {
      delete list[project];
      updateList();
    }
  };

  const getTask = (project, task) => {
    return list[project].tasks.find((t) => t.name === task);
  };

  const addTask = (project, name, dueDate, description) => {
    if (projectExists(project)) {
      if (!taskExists(name)) {
        project.tasks.push(Task(name, dueDate, description));
        updateList();
      }
    }
  };

  const deleteTask = (project, task) => {
    if (projectExists(project)) {
      if (taskExists(task)) {
        list[project].tasks.splice(list[project].tasks.indexOf(task), 1);
        updateList();
      }
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
    getTask,
    addTask,
    deleteTask,
  };
})();

export default Todo;
