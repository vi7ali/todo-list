"use strict";

const Project = (name, dueDate) => {
  let pName = name;
  let pDueDate = dueDate;
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

    get dueDate() {
      return pDueDate;
    },

    set name(newName) {
      pName = newName;
    },

    set dueDate(newDate) {
      pDueDate = newDate;
    },
  };
};

export default Project;
