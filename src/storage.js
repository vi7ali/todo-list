'use strict'

const Storage = (() => {
    
  const retrieveList = () => {
    let list = JSON.parse(localStorage.getItem('gyst-list'));    
    return list;
  };

  const storeList = (list) => {
    let newList = JSON.stringify(list)
    localStorage.setItem('gyst-list', newList);
  };  

  return {
    retrieveList,
    storeList
  }
})();

export default Storage;