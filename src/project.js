'use strict';

const Project = (name, dueDate) => {  
  const getName = () => name;
  const getDate = () => dueDate;
  const tasks = [];

  const setName = (newName) => {
    name = newName;
  };

  const setDate = (newDate) => {
    dueDate = newDate;
  };

  const addTask = (task) => {    
    tasks.push(task);
  };

  const deleteTask = (task) => {
    const result = tasks.filter(obj => {
      return obj.id !== task.id;
    });
    tasks.splice(0, tasks.length, ...result);
  };
  
  return {
    getName,
    getDate,
    setName,
    setDate,
    addTask,
    deleteTask,
    tasks
  };
};

export default Project