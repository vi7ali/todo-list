'use strict';

const UI = (() => {  

  const load = () => {
    localStorage.setItem('Bla', 'hello');
    console.log(localStorage.getItem('Bla'));
  };

  return {
    load    
  };
})();

export default UI;