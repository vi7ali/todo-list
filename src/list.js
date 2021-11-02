'use strict'

import Storage from './storage'

const List = () => {
  let projects = [];

  const setProjects = (data) => {
    projects = Storage.retrieveThing(data);
  };

  const getProjects = () => projects;

  return {
    setProjects,
    getProjects
  };
};

export default List;