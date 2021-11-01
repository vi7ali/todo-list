'use strict';

const UI = (() => {  

  const load = () => {
    document.getElementById('header-title').innerText = 'Hello, Mr. Thompson!!';
  };

  return {
    load    
  };
})();

export default UI;