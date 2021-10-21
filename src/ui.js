'use strict';

const UI = (() => {  

  const loadUI = () => {
    document.getElementById('header-title').innerText = 'Hello, Mr. Thompson!!';
  };

  return {
    loadUI    
  };
})();

export default UI;