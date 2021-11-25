"use strict";

const Storage = (() => {
  const retrieveList = () => JSON.parse(localStorage.getItem("gyst-list"));
  const storeList = (list) => localStorage.setItem("gyst-list", JSON.stringify(list));

  return {
    retrieveList,
    storeList,
  };
})();

export default Storage;
