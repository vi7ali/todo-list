"use strict";

const Project = (name, dueDate) => {
  let pName = name;
  let pDueDate = dueDate;
  let projectId = name.replaceAll(" ", "").toLowerCase();
  let tasks = [];

  return {
    get tasks() {
      return tasks;
    },
    set tasks(newTasks) {
      tasks = newTasks;
    },
    get name() {
      return pName;
    },
    set name(newName) {
      pName = newName;
    },
    get id() {
      return projectId;
    },
    set id(newPId) {
      projectId = newPId;
    },
    get dueDate() {
      return pDueDate;
    },
    set dueDate(newDate) {
      pDueDate = newDate;
    },
  };
};

export default Project;
