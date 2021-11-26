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

/***/ "./src/components.js":
/*!***************************!*\
  !*** ./src/components.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\n\nvar Components = function () {\n  var projectContainer = function projectContainer(project) {\n    var container = document.createElement(\"div\");\n    container.setAttribute(\"class\", \"aside__project\");\n    container.setAttribute(\"id\", project.name.replaceAll(\" \", \"\").toLowerCase());\n    return container;\n  };\n\n  var projectTitle = function projectTitle(project) {\n    var title = document.createElement(\"h2\");\n    title.classList.add(\"project__title\");\n    title.innerText = project.name;\n    return title;\n  };\n\n  var projectDescription = function projectDescription(project) {\n    var desc = document.createElement(\"p\");\n    desc.classList.add(\"project__description\");\n    desc.classList.add(\"project__description--hidden\");\n    desc.innerHTML = \"<ul> \\n                        <li>Duedate: \".concat(project.dueDate, \"</li>\\n                        <li>Tasks: \").concat(project.tasks.length, \"</li>\\n                      </ul>\");\n    return desc;\n  };\n\n  return {\n    projectContainer: projectContainer,\n    projectDescription: projectDescription,\n    projectTitle: projectTitle\n  };\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Components);\n\n//# sourceURL=webpack://todo-list/./src/components.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n\n\n\n\n_ui__WEBPACK_IMPORTED_MODULE_0__.default.init();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\n\nvar Storage = function () {\n  var retrieveList = function retrieveList() {\n    return JSON.parse(localStorage.getItem(\"gyst-list\"));\n  };\n\n  var storeList = function storeList(list) {\n    return localStorage.setItem(\"gyst-list\", JSON.stringify(list));\n  };\n\n  return {\n    retrieveList: retrieveList,\n    storeList: storeList\n  };\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Storage);\n\n//# sourceURL=webpack://todo-list/./src/storage.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\n\n\n\n\n\nvar Todo = function () {\n  var list; // Private Methods\n\n  var updateList = function updateList() {\n    _storage__WEBPACK_IMPORTED_MODULE_0__.default.storeList(list);\n    list = _storage__WEBPACK_IMPORTED_MODULE_0__.default.retrieveList();\n  };\n\n  var createDefaultList = function createDefaultList() {\n    var defaultList = {\n      project1: (0,_project__WEBPACK_IMPORTED_MODULE_1__.default)(\"Project 1\", \"tomorrow\"),\n      project2: (0,_project__WEBPACK_IMPORTED_MODULE_1__.default)(\"Project 2\", \"tomorrow\"),\n      project3: (0,_project__WEBPACK_IMPORTED_MODULE_1__.default)(\"Project 3\", \"tomorrow\")\n    };\n    var defaultTasks = [(0,_task__WEBPACK_IMPORTED_MODULE_2__.default)(\"task1\", \"1 hour\", \"Do task 1\"), (0,_task__WEBPACK_IMPORTED_MODULE_2__.default)(\"task2\", \"2 hour\", \"Do task 2\"), (0,_task__WEBPACK_IMPORTED_MODULE_2__.default)(\"task3\", \"3 hour\", \"Do task 3\")];\n\n    for (var project in defaultList) {\n      defaultList[project].tasks = defaultTasks;\n    }\n\n    return defaultList;\n  }; //Public Methods\n\n\n  var loadList = function loadList() {\n    list = _storage__WEBPACK_IMPORTED_MODULE_0__.default.retrieveList();\n\n    if (list === null) {\n      list = createDefaultList();\n      updateList();\n    }\n  };\n\n  var getProject = function getProject(name) {\n    if (list[name]) {\n      return list[name];\n    }\n  };\n\n  var addProject = function addProject(name, dueDate) {\n    var projectName = name.replaceAll(\" \", \"\").toLowerCase();\n\n    if (!getProject(projectName)) {\n      list[projectName] = (0,_project__WEBPACK_IMPORTED_MODULE_1__.default)(name, dueDate);\n      updateList();\n    }\n  };\n\n  var deleteProject = function deleteProject(name) {\n    for (var project in list) {\n      if (project === name) {\n        delete list[project];\n        updateList();\n        return;\n      }\n    }\n  };\n\n  var getTask = function getTask(projectName, taskName) {\n    var project = getProject(projectName);\n\n    if (project) {\n      var task = project.tasks.find(function (task) {\n        return task.name === taskName;\n      });\n      if (task) return task;\n    }\n  };\n\n  var addTask = function addTask(projectName, name, dueDate, description) {\n    var project = getProject(projectName);\n    var taskName = name.replaceAll(\" \", \"\").toLowerCase();\n\n    if (project) {\n      if (!project.tasks.some(function (task) {\n        return task.name === taskName;\n      })) {\n        project.tasks.push((0,_task__WEBPACK_IMPORTED_MODULE_2__.default)(taskName, dueDate, description));\n        updateList();\n      }\n    }\n  };\n\n  var deleteTask = function deleteTask(projectName, taskName) {\n    var project = getProject(projectName);\n\n    if (project) {\n      var taskIndex = project.tasks.indexOf(taskName);\n\n      if (taskIndex !== -1) {\n        list[project].tasks.splice(taskIndex, 1);\n        updateList();\n      }\n    }\n  };\n\n  return {\n    get list() {\n      return list;\n    },\n\n    loadList: loadList,\n    getProject: getProject,\n    addProject: addProject,\n    deleteProject: deleteProject,\n    getTask: getTask,\n    addTask: addTask,\n    deleteTask: deleteTask\n  };\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);\n\n//# sourceURL=webpack://todo-list/./src/todo.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ \"./src/components.js\");\n\n\n\n\n\nvar UI = function () {\n  var asidePanel = document.getElementById(\"aside\");\n  var addButton = document.getElementById(\"add\");\n\n  var init = function init() {\n    _todo__WEBPACK_IMPORTED_MODULE_0__.default.loadList(); // const pageElements = getPageElements();\n\n    assignListeners();\n    populateProjects();\n  };\n\n  var populateProjects = function populateProjects() {\n    document.querySelectorAll('.aside__project').forEach(function (e) {\n      return e.remove();\n    });\n\n    for (var project in _todo__WEBPACK_IMPORTED_MODULE_0__.default.list) {\n      drawProjectItem(_todo__WEBPACK_IMPORTED_MODULE_0__.default.getProject(project));\n    }\n  };\n\n  var drawNewProject = function drawNewProject() {\n    var projectName = \"New Project\";\n    var dueDate = \"30.12.2023\";\n    _todo__WEBPACK_IMPORTED_MODULE_0__.default.addProject(projectName, dueDate);\n    populateProjects();\n  };\n\n  var drawProjectItem = function drawProjectItem(project) {\n    var projectContainer = _components__WEBPACK_IMPORTED_MODULE_1__.default.projectContainer(project);\n    var projectTitle = _components__WEBPACK_IMPORTED_MODULE_1__.default.projectTitle(project);\n    var projectDescription = _components__WEBPACK_IMPORTED_MODULE_1__.default.projectDescription(project);\n    projectContainer.appendChild(projectTitle);\n    projectContainer.appendChild(projectDescription);\n    asidePanel.appendChild(projectContainer);\n    projectTitle.addEventListener(\"click\", loadProject);\n  };\n\n  var loadProject = function loadProject(e) {\n    e.target.classList.toggle(\"project__title--active\");\n    e.target.nextElementSibling.classList.toggle(\"project__description--hidden\");\n  };\n\n  function assignListeners() {\n    addButton.addEventListener('click', drawNewProject);\n  }\n\n  ;\n  return {\n    init: init\n  };\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);\n\n//# sourceURL=webpack://todo-list/./src/ui.js?");

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