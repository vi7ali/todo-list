'use strict';

const Task = (name, dueDate) => {  
  const getName = () => name;
  const getDate = () => dueDate;

  const setName = (newName) => {
    name = newName;
  };

  const setDate = (newDate) => {
    dueDate = newDate;
  };
  
  return {
    getName,
    getDate,
    setName,
    setDate
  };
};

export default Task