"use strict";

const Project = (name, dueDate) => {
  let pName = name;
  let pDueDate = dueDate;
  const tasks = [];

  const addTask = (task) => {
    tasks.push(task);
  };

  const deleteTask = (task) => {
    const result = tasks.filter((obj) => {
      return obj.id !== task.id;
    });
    tasks.splice(0, tasks.length, ...result);
  };

  return {
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
    addTask,
    deleteTask,
  };
};

export default Project;