"use strict";

const Task = (name, dueDate, description) => {
  let tName = name;
  let tDueDate = dueDate;
  let tDescription = description;

  return {
    get name() {
      return tName;
    },
    get dueDate() {
      return tDueDate;
    },
    get description() {
      return tDescription;
    },
    set name(newName) {
      tName = newName;
    },
    set dueDate(newDate) {
      tDueDate = newDate;
    },
    set description(newDescription) {
      tDescription = newDescription;
    },
  };
};

export default Task;
