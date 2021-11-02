'use strict'

const Storage = (() => {
    
  const retrieveThing = (key) => {
    return localStorage.getItem(key);
  };

  const storeThing = (key, value) => {
    localStorage.setItem(key, value);
  };  

  return {
    storeThing,
    retrieveThing
  }
})();

export default Storage;