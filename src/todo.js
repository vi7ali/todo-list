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
    return false;
  };

  const addProject = (name, dueDate) => {
    let projName = name.replaceAll(" ", "").toLowerCase();
    if (!getProject(projName)) {
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

  const getTask = (project, taskName) => {
    if (getProject(project)) {
      const index = list[project].tasks.findIndex(
        (task) => task.name === taskName
      );
      if (index !== -1) {
        return list[project].tasks[index];
      } else {
        console.log(`Task ${taskName} not found in project ${project}`);
        return;
      }
    }
    console.log(`Project ${project} not found`);
  };

  const addTask = (project, taskName, taskDate, taskDescription) => {
    let task = Task(taskName, taskDate, taskDescription);
    console.log(project);
    console.log(getProject(project).tasks);
    console.log(getProject(project).tasks.includes(getTask(taskName)));
    if (getProject(project) && !getProject(project).tasks.includes(getTask(taskName))) {
      list[project].tasks.push(task);
      updateList();
      return;
    }
    console.log(`Project ${project} not found`);
  };

  const deleteTask = (project, taskName) => {
    if (getProject(project)) {
      const index = list[project].tasks.findIndex(
        (task) => task.name === taskName
      );
      if (index !== -1) {
        list[project].tasks.splice(index, 1);
        updateList();
        return;
      } else {
        console.log(`Task ${taskName} not found in project ${project}`);
        return;
      }
    }
    console.log(`Project ${project} not found`);
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
