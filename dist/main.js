/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n\n\n\n\n\n\n_ui__WEBPACK_IMPORTED_MODULE_0__.default.init();\n_todo__WEBPACK_IMPORTED_MODULE_3__.default.addProject(\"Project ONE\", \"sdfsd\");\n_todo__WEBPACK_IMPORTED_MODULE_3__.default.addTask(\"projectone\", (0,_task__WEBPACK_IMPORTED_MODULE_1__.default)(\"dfd\", \"dfsd\", \"sdfs\"));\nconsole.log(_todo__WEBPACK_IMPORTED_MODULE_3__.default.getProject(\"project2\").tasks[1].name);\n_todo__WEBPACK_IMPORTED_MODULE_3__.default.deleteProject(\"project1\");\n_todo__WEBPACK_IMPORTED_MODULE_3__.default.deleteTask(\"project2\", \"task1\");\nconsole.log(_todo__WEBPACK_IMPORTED_MODULE_3__.default.getProject(\"project2\").tasks);\nconsole.log(_todo__WEBPACK_IMPORTED_MODULE_3__.default.list);\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\n\nvar Project = function Project(name, dueDate) {\n  var pName = name;\n  var pDueDate = dueDate;\n  var tasks = [];\n  return {\n    get tasks() {\n      return tasks;\n    },\n\n    set tasks(newTasks) {\n      tasks = newTasks;\n    },\n\n    get name() {\n      return pName;\n    },\n\n    get dueDate() {\n      return pDueDate;\n    },\n\n    set name(newName) {\n      pName = newName;\n    },\n\n    set dueDate(newDate) {\n      pDueDate = newDate;\n    }\n\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\n\nvar Storage = function () {\n  var retrieveList = function retrieveList() {\n    var list = JSON.parse(localStorage.getItem(\"gyst-list\"));\n    return list;\n  };\n\n  var storeList = function storeList(list) {\n    var newList = JSON.stringify(list);\n    localStorage.setItem(\"gyst-list\", newList);\n  };\n\n  return {\n    retrieveList: retrieveList,\n    storeList: storeList\n  };\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Storage);\n\n//# sourceURL=webpack://todo-list/./src/storage.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\n\nvar Task = function Task(name, dueDate, description) {\n  var tName = name;\n  var tDueDate = dueDate;\n  var tDescription = description;\n  return {\n    get name() {\n      return tName;\n    },\n\n    get dueDate() {\n      return tDueDate;\n    },\n\n    get description() {\n      return tDescription;\n    },\n\n    set name(newName) {\n      tName = newName;\n    },\n\n    set dueDate(newDate) {\n      tDueDate = newDate;\n    },\n\n    set description(newDescription) {\n      tDescription = newDescription;\n    }\n\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n//# sourceURL=webpack://todo-list/./src/task.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\n\n\n\n\n\nvar Todo = function () {\n  var list; // Private Methods\n\n  var updateList = function updateList() {\n    _storage__WEBPACK_IMPORTED_MODULE_0__.default.storeList(list);\n    list = _storage__WEBPACK_IMPORTED_MODULE_0__.default.retrieveList();\n  };\n\n  var isValid = function isValid(name) {\n    //Is there a project with the same name?\n    for (var project in list) {\n      if (project === name) return false;\n    }\n\n    return true;\n  };\n\n  var createDefaultList = function createDefaultList() {\n    var defaultList = {\n      project1: (0,_project__WEBPACK_IMPORTED_MODULE_1__.default)(\"Project 1\", \"tomorrow\"),\n      project2: (0,_project__WEBPACK_IMPORTED_MODULE_1__.default)(\"Project 2\", \"tomorrow\"),\n      project3: (0,_project__WEBPACK_IMPORTED_MODULE_1__.default)(\"Project 3\", \"tomorrow\")\n    };\n    var defaultTasks = [(0,_task__WEBPACK_IMPORTED_MODULE_2__.default)(\"task1\", \"1 hour\", \"Do task 1\"), (0,_task__WEBPACK_IMPORTED_MODULE_2__.default)(\"task2\", \"2 hour\", \"Do task 2\"), (0,_task__WEBPACK_IMPORTED_MODULE_2__.default)(\"task3\", \"3 hour\", \"Do task 3\")];\n\n    for (var project in defaultList) {\n      defaultList[project].tasks = defaultTasks;\n    }\n\n    return defaultList;\n  }; //Public Methods\n\n\n  var loadList = function loadList() {\n    list = _storage__WEBPACK_IMPORTED_MODULE_0__.default.retrieveList();\n\n    if (list === null) {\n      list = createDefaultList();\n      updateList();\n    }\n  };\n\n  var getProject = function getProject(name) {\n    return list[name];\n  };\n\n  var addProject = function addProject(name, dueDate) {\n    var projName = name.replaceAll(\" \", \"\").toLowerCase();\n\n    if (isValid(projName)) {\n      var newProject = (0,_project__WEBPACK_IMPORTED_MODULE_1__.default)(name, dueDate);\n      list[projName] = newProject;\n      updateList();\n    } else {\n      console.log(\"Duplicated name\");\n    }\n  };\n\n  var deleteProject = function deleteProject(name) {\n    for (var project in list) {\n      if (project === name) {\n        delete list[project];\n        updateList();\n        return;\n      }\n    }\n  };\n\n  var addTask = function addTask(project, task) {\n    list[project].tasks.push(task);\n    updateList();\n  };\n\n  var deleteTask = function deleteTask(project, task) {\n    var index = list[project].tasks.findIndex(function (el) {\n      return el.name === task;\n    });\n\n    if (index !== -1) {\n      list[project].tasks.splice(index, 1);\n      updateList();\n    }\n  };\n\n  return {\n    get list() {\n      return list;\n    },\n\n    loadList: loadList,\n    getProject: getProject,\n    addProject: addProject,\n    deleteProject: deleteProject,\n    addTask: addTask,\n    deleteTask: deleteTask\n  };\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);\n\n//# sourceURL=webpack://todo-list/./src/todo.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n\n\n\n\nvar UI = function () {\n  var init = function init() {\n    _todo__WEBPACK_IMPORTED_MODULE_0__.default.loadList();\n  };\n\n  return {\n    init: init\n  };\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);\n\n//# sourceURL=webpack://todo-list/./src/ui.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;