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

  const getProject = (name) => {
    if (list[name]) {
      return list[name];
    }    
  };

  const addProject = (name, dueDate) => {
    const projectName = name.replaceAll(" ", "").toLowerCase();
    if (!getProject(projectName)) {      
      list[projectName] = Project(name, dueDate);
      updateList();
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

  const getTask = (projectName, taskName) => {
    const project = getProject(projectName);
    if (project) {
      const task = project.tasks.find((task) => task.name === taskName);
      if (task) return task;
    }
  };

  const addTask = (projectName, name, dueDate, description) => {
    const project = getProject(projectName);
    const taskName = name.replaceAll(" ", "").toLowerCase();
    if (project) {
      if (!project.tasks.some((task) => task.name === taskName)) {
        project.tasks.push(Task(taskName, dueDate, description));
        updateList();        
      }
    }
  };

  const deleteTask = (projectName, taskName) => {
    const project = getProject(projectName);
    if (project) {
      const taskIndex = project.tasks.indexOf(taskName);
      if (taskIndex !== -1) {
        list[project].tasks.splice(taskIndex, 1);
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
