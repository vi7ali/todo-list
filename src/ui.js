'use strict';

const Ui = (() => {  

  function loadUI() {
    document.getElementById('header-title').innerText = 'Hello, Mr. Thompson!'
  };

  return {
    loadUI
  };
})();


export default Ui;