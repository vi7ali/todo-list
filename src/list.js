"use strict";

import Storage from "./storage";
import Project from "./project";

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
    return defaultList;
  };

  const setProjects = () => {
    if (list === null) {
      list = createDefaultList();
    }
    updateList();
  };

  const addProject = (name, dueDate) => {
    //Replace all spaces and lowercase of name for object property
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
    setProjects,
    getProject,
    addProject,
  };
})();

export default List;
