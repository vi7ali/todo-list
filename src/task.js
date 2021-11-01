'use strict';

const Task = (name, dueDate) => {  
  const getName = () => name;
  const getDate = () => dueDate;
  const id = Date.now().toString(36)+Math.random().toString(36).substring(2);

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
    setDate,    
    id
  };
};

export default Task