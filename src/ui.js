'use strict';

import Todo from "./todo";

const UI = (() => {  

  const init = () => {
    Todo.loadList();
  };

  return {
    init
  };
})();

export default UI;