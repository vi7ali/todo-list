'use strict';

const todoUI = (() => {  

  function loadUI() {
    document.getElementById('header-title').innerText = 'Hello, mr. thompson!'
  };

  return {
    loadUI
  };
})();


export default todoUI;