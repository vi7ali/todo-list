"use strict";

import Storage from "./storage";
import Project from "./project";
import Task from "./task";

const List = (() => {
  let list = Storage.retrieveList();

  const updateList = () => {
    Storage.storeList(list);
    list = Storage.retrieveList();
    //Add methods to parsed Project objects from JSON
    for (const project in list) {
      list[project] = Object.assign(Project(), list[project]);
    }
  };

  const createDefaultList = () => {
    const defaultList = {
      project1: Project("Project 1", "tomorrow"),
      project2: Project("Project 2", "tomorrow"),
      project3: Project("Project 3", "tomorrow"),
    };
    for (const project in defaultList) {
      defaultList[project].addTask(Task("task1", "1 hour", "Do task 1"));
      defaultList[project].addTask(Task("task2", "2 hour", "Do task 2"));
      defaultList[project].addTask(Task("task3", "3 hour", "Do task 3"));
    }
    return defaultList;
  };

  const loadList = () => {
    if (list === null) {
      list = createDefaultList();
    }
    updateList();
  };

  const addProject = (name, dueDate) => {
    //Replace all spaces and lowercase name for object property
    let projName = name.replaceAll(" ", "").toLowerCase();
    //Check for projects with the same name
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

  const isValid = (name) => {
    for (const project in list) {
      if (project === name) return false;
    }
    return true;
  };

  const getProject = (name) => list[name];

  return {
    get list() {
      return list;
    },
    loadList,
    getProject,
    addProject,
    deleteProject,
  };
})();

export default List;
