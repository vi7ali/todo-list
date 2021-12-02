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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\n\nvar Components = function () {\n  var projectContainer = function projectContainer(project) {\n    var container = document.createElement(\"div\");\n    container.classList.add(\"aside__project\");\n    container.setAttribute(\"id\", project.name.replaceAll(\" \", \"\").toLowerCase());\n    return container;\n  };\n\n  var projectTitle = function projectTitle(project) {\n    var title = document.createElement(\"h2\");\n    title.classList.add(\"project__title\");\n    title.innerText = project.name;\n    return title;\n  };\n\n  var projectDescription = function projectDescription(project) {\n    var desc = document.createElement(\"p\");\n    desc.classList.add(\"project__description\");\n    desc.classList.add(\"project__description--hidden\");\n    desc.innerHTML = \"<ul class=\\\"project__list\\\"> \\n                        <li class=\\\"list__item\\\">\\n                          <span>Duedate:</span> \\n                          <span>\".concat(project.dueDate, \"</span>\\n                        </li>\\n                        <li class=\\\"list__item\\\">\\n                          <span>Tasks: </span>\\n                          <span>\").concat(project.tasks.length, \"</span>\\n                        </li>\\n                        <li class=\\\"list__item\\\">\\n                          <button class=\\\"project__button\\\">\\n                          <svg\\n                          xmlns:dc=\\\"http://purl.org/dc/elements/1.1/\\\"\\n                          xmlns:cc=\\\"http://creativecommons.org/ns#\\\"\\n                          xmlns:rdf=\\\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\\\"\\n                          xmlns:svg=\\\"http://www.w3.org/2000/svg\\\"\\n                          xmlns=\\\"http://www.w3.org/2000/svg\\\"\\n                          xmlns:sodipodi=\\\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\\\"\\n                          xmlns:inkscape=\\\"http://www.inkscape.org/namespaces/inkscape\\\"\\n                          version=\\\"1.1\\\"\\n                          id=\\\"Capa_1\\\"\\n                          x=\\\"0px\\\"\\n                          y=\\\"0px\\\"\\n                          viewBox=\\\"0 0 591.6 591.6\\\"\\n                          style=\\\"enable-background:new 0 0 591.6 591.6;\\\"\\n                          xml:space=\\\"preserve\\\"\\n                          sodipodi:docname=\\\"plus-sign-svgrepo-com.svg\\\"\\n                          inkscape:version=\\\"0.92.5 (2060ec1f9f, 2020-04-08)\\\"><metadata\\n                          id=\\\"metadata3884\\\"><rdf:RDF><cc:Work\\n                              rdf:about=\\\"\\\"><dc:format>image/svg+xml</dc:format><dc:type\\n                                rdf:resource=\\\"http://purl.org/dc/dcmitype/StillImage\\\" /></cc:Work></rdf:RDF></metadata><defs\\n                          id=\\\"defs3882\\\" /><sodipodi:namedview\\n                          pagecolor=\\\"#ffffff\\\"\\n                          bordercolor=\\\"#666666\\\"\\n                          borderopacity=\\\"1\\\"\\n                          objecttolerance=\\\"10\\\"\\n                          gridtolerance=\\\"10\\\"\\n                          guidetolerance=\\\"10\\\"\\n                          inkscape:pageopacity=\\\"0\\\"\\n                          inkscape:pageshadow=\\\"2\\\"\\n                          inkscape:window-width=\\\"1920\\\"\\n                          inkscape:window-height=\\\"1016\\\"\\n                          id=\\\"namedview3880\\\"\\n                          showgrid=\\\"false\\\"\\n                          inkscape:zoom=\\\"1.4164977\\\"\\n                          inkscape:cx=\\\"164.84319\\\"\\n                          inkscape:cy=\\\"295.79999\\\"\\n                          inkscape:window-x=\\\"0\\\"\\n                          inkscape:window-y=\\\"27\\\"\\n                          inkscape:window-maximized=\\\"1\\\"\\n                          inkscape:current-layer=\\\"Capa_1\\\" />\\n                        <g\\n                            id=\\\"g3847\\\"\\n                            transform=\\\"rotate(45,295.8,295.8)\\\">\\n                          <g\\n                            id=\\\"g3845\\\">\\n                            <path fill=\\\"#D11A2A\\\"\\n                            d=\\\"M 581.4,244.8 H 346.8 V 10.2 C 346.8,4.488 342.312,0 336.6,0 H 255 c -5.712,0 -10.2,4.488 -10.2,10.2 V 244.8 H 10.2 C 4.488,244.8 0,249.288 0,255 v 81.6 c 0,5.712 4.488,10.2 10.2,10.2 h 234.6 v 234.6 c 0,5.712 4.488,10.2 10.2,10.2 h 81.6 c 5.712,0 10.2,-4.488 10.2,-10.2 V 346.8 h 234.6 c 5.712,0 10.2,-4.488 10.2,-10.2 V 255 c 0,-5.712 -4.488,-10.2 -10.2,-10.2 z m -10.2,81.6 H 336.6 c -5.712,0 -10.2,4.488 -10.2,10.2 V 571.2 H 265.2 V 336.6 c 0,-5.712 -4.488,-10.2 -10.2,-10.2 H 20.4 V 265.2 H 255 c 5.712,0 10.2,-4.488 10.2,-10.2 V 20.4 h 61.2 V 255 c 0,5.712 4.488,10.2 10.2,10.2 h 234.6 z\\\"\\n                            id=\\\"path3841\\\"\\n                            inkscape:connector-curvature=\\\"0\\\" />\\n                            <path fill=\\\"#D11A2A\\\"\\n                            d=\\\"m 303.96,33.66 h -20.4 c -2.856,0 -5.1,2.244 -5.1,5.1 v 204 c 0,2.856 2.244,5.1 5.1,5.1 2.856,0 5.1,-2.244 5.1,-5.1 V 43.86 h 15.3 c 2.856,0 5.1,-2.244 5.1,-5.1 0,-2.856 -2.244,-5.1 -5.1,-5.1 z\\\"\\n                            id=\\\"path3843\\\"\\n                            inkscape:connector-curvature=\\\"0\\\" />\\n                          </g>\\n                        </g>\\n                        <g\\n                            id=\\\"g3849\\\"\\n                            transform=\\\"rotate(45,295.8,295.8)\\\">\\n                        </g>\\n                        <g\\n                            id=\\\"g3851\\\"\\n                            transform=\\\"rotate(45,295.8,295.8)\\\">\\n                        </g>\\n                        <g\\n                            id=\\\"g3853\\\"\\n                            transform=\\\"rotate(45,295.8,295.8)\\\">\\n                        </g>\\n                        <g\\n                            id=\\\"g3855\\\"\\n                            transform=\\\"rotate(45,295.8,295.8)\\\">\\n                        </g>\\n                        <g\\n                            id=\\\"g3857\\\"\\n                            transform=\\\"rotate(45,295.8,295.8)\\\">\\n                        </g>\\n                        <g\\n                            id=\\\"g3859\\\"\\n                            transform=\\\"rotate(45,295.8,295.8)\\\">\\n                        </g>\\n                        <g\\n                            id=\\\"g3861\\\"\\n                            transform=\\\"rotate(45,295.8,295.8)\\\">\\n                        </g>\\n                        <g\\n                            id=\\\"g3863\\\"\\n                            transform=\\\"rotate(45,295.8,295.8)\\\">\\n                        </g>\\n                        <g\\n                            id=\\\"g3865\\\"\\n                            transform=\\\"rotate(45,295.8,295.8)\\\">\\n                        </g>\\n                        <g\\n                            id=\\\"g3867\\\"\\n                            transform=\\\"rotate(45,295.8,295.8)\\\">\\n                        </g>\\n                        <g\\n                            id=\\\"g3869\\\"\\n                            transform=\\\"rotate(45,295.8,295.8)\\\">\\n                        </g>\\n                        <g\\n                            id=\\\"g3871\\\"\\n                            transform=\\\"rotate(45,295.8,295.8)\\\">\\n                        </g>\\n                        <g\\n                            id=\\\"g3873\\\"\\n                            transform=\\\"rotate(45,295.8,295.8)\\\">\\n                        </g>\\n                        <g\\n                            id=\\\"g3875\\\"\\n                            transform=\\\"rotate(45,295.8,295.8)\\\">\\n                        </g>\\n                        <g\\n                            id=\\\"g3877\\\"\\n                            transform=\\\"rotate(45,295.8,295.8)\\\">\\n                        </g>\\n                       </svg>\\n                      </button>\\n                      <button class=\\\"project__button\\\">\\n                        <svg version=\\\"1.1\\\" id=\\\"Capa_1\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" x=\\\"0px\\\" y=\\\"0px\\\"\\n                          viewBox=\\\"0 0 568.599 568.599\\\" style=\\\"enable-background:new 0 0 568.599 568.599;\\\" xml:space=\\\"preserve\\\">\\n                            <path fill=\\\"#458B00\\\" d=\\\"M565.692,147.211L507.96,89.479c-4.08-4.08-10.404-4.08-14.484,0L241.128,342.031L75.276,176.179\\n                              c-4.08-4.08-10.404-4.08-14.484,0L3.06,233.911c-4.08,4.08-4.08,10.404,0,14.484l230.724,230.724\\n                              c1.836,1.836,4.488,3.06,7.14,3.06s5.304-1.02,7.14-3.06l317.628-317.424C569.568,157.615,569.568,151.291,565.692,147.211z\\n                              M241.128,457.495L24.684,241.051l43.248-43.248l165.852,165.852c4.08,4.08,10.404,4.08,14.484,0L500.82,111.103l43.248,43.248\\n                              L241.128,457.495z\\\"/>\\n                            <path fill=\\\"#458B00\\\" d=\\\"M497.148,133.543L352.92,277.771c-2.04,2.04-2.04,5.304,0,7.14c1.02,1.02,2.244,1.428,3.672,1.428\\n                              c1.428,0,2.652-0.408,3.672-1.428L500.82,144.355l10.812,10.812c2.04,2.04,5.304,2.04,7.14,0c2.04-2.04,2.04-5.304,0-7.14\\n                              l-14.484-14.484c-1.02-1.02-2.244-1.428-3.672-1.428C499.188,132.115,498.168,132.523,497.148,133.543z\\\"/>\\n                        </svg>\\n                      </button>\\n                      </li>\\n                      </ul>\");\n    return desc;\n  };\n\n  return {\n    projectContainer: projectContainer,\n    projectDescription: projectDescription,\n    projectTitle: projectTitle\n  };\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Components);\n\n//# sourceURL=webpack://todo-list/./src/components.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n\n\n\n\n_ui__WEBPACK_IMPORTED_MODULE_0__.default.init();\n_ui__WEBPACK_IMPORTED_MODULE_0__.default.drawNewProject();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\n\n\n\n\n\nvar Todo = function () {\n  var list; // Private Methods\n\n  var updateList = function updateList() {\n    _storage__WEBPACK_IMPORTED_MODULE_0__.default.storeList(list);\n    list = _storage__WEBPACK_IMPORTED_MODULE_0__.default.retrieveList();\n  };\n\n  var createDefaultList = function createDefaultList() {\n    var defaultList = {\n      \"Project 1\": (0,_project__WEBPACK_IMPORTED_MODULE_1__.default)(\"Project 1\", \"tomorrow\"),\n      \"Project 2\": (0,_project__WEBPACK_IMPORTED_MODULE_1__.default)(\"Project 2\", \"tomorrow\"),\n      \"Project 3\": (0,_project__WEBPACK_IMPORTED_MODULE_1__.default)(\"Project 3\", \"tomorrow\")\n    };\n    var defaultTasks = [(0,_task__WEBPACK_IMPORTED_MODULE_2__.default)(\"Task 1\", \"1 hour\", \"Do task 1\"), (0,_task__WEBPACK_IMPORTED_MODULE_2__.default)(\"Task 2\", \"2 hour\", \"Do task 2\"), (0,_task__WEBPACK_IMPORTED_MODULE_2__.default)(\"Task 3\", \"3 hour\", \"Do task 3\")];\n\n    for (var project in defaultList) {\n      defaultList[project].tasks = defaultTasks;\n    }\n\n    return defaultList;\n  };\n\n  var projectExists = function projectExists(project) {\n    if (list[project]) return true;\n    return false;\n  };\n\n  var taskExists = function taskExists(project, task) {\n    if (list[project].tasks.some(function (t) {\n      return t === task;\n    })) return true;\n    return false;\n  }; //Public Methods\n\n\n  var loadList = function loadList() {\n    list = _storage__WEBPACK_IMPORTED_MODULE_0__.default.retrieveList();\n\n    if (!list) {\n      list = createDefaultList();\n      updateList();\n    }\n  };\n\n  var getProject = function getProject(name) {\n    return list[name];\n  };\n\n  var addProject = function addProject(name, dueDate) {\n    if (!projectExists(name)) {\n      list[name] = (0,_project__WEBPACK_IMPORTED_MODULE_1__.default)(name, dueDate);\n      updateList();\n    }\n  };\n\n  var deleteProject = function deleteProject(project) {\n    if (projectExists(project)) {\n      delete list[project];\n      updateList();\n    }\n  };\n\n  var getTask = function getTask(project, task) {\n    return list[project].tasks.find(function (t) {\n      return t.name === task;\n    });\n  };\n\n  var addTask = function addTask(project, name, dueDate, description) {\n    if (projectExists(project)) {\n      if (!taskExists(name)) {\n        project.tasks.push((0,_task__WEBPACK_IMPORTED_MODULE_2__.default)(name, dueDate, description));\n        updateList();\n      }\n    }\n  };\n\n  var deleteTask = function deleteTask(project, task) {\n    if (projectExists(project)) {\n      if (taskExists(task)) {\n        list[project].tasks.splice(list[project].tasks.indexOf(task), 1);\n        updateList();\n      }\n    }\n  };\n\n  return {\n    get list() {\n      return list;\n    },\n\n    loadList: loadList,\n    getProject: getProject,\n    addProject: addProject,\n    deleteProject: deleteProject,\n    getTask: getTask,\n    addTask: addTask,\n    deleteTask: deleteTask\n  };\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);\n\n//# sourceURL=webpack://todo-list/./src/todo.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ \"./src/components.js\");\n\n\n\n\n\nvar UI = function () {\n  var asidePanel = document.getElementById(\"aside\");\n  var addButton = document.getElementById(\"add\");\n\n  var init = function init() {\n    _todo__WEBPACK_IMPORTED_MODULE_0__.default.loadList(); // const pageElements = getPageElements();\n\n    assignListeners();\n    populateProjects();\n  };\n\n  var populateProjects = function populateProjects() {\n    document.querySelectorAll('.aside__project').forEach(function (e) {\n      return e.remove();\n    });\n\n    for (var project in _todo__WEBPACK_IMPORTED_MODULE_0__.default.list) {\n      drawProjectItem(_todo__WEBPACK_IMPORTED_MODULE_0__.default.getProject(project));\n    }\n  };\n\n  var drawNewProject = function drawNewProject() {\n    var projectName = \"New Project\";\n    var dueDate = \"30.12.2023\";\n    _todo__WEBPACK_IMPORTED_MODULE_0__.default.addProject(projectName, dueDate);\n    populateProjects();\n  };\n\n  var removeProject = function removeProject(name) {\n    _todo__WEBPACK_IMPORTED_MODULE_0__.default.deleteProject(name);\n    populateProjects();\n  };\n\n  var drawProjectItem = function drawProjectItem(project) {\n    var projectContainer = _components__WEBPACK_IMPORTED_MODULE_1__.default.projectContainer(project);\n    var projectTitle = _components__WEBPACK_IMPORTED_MODULE_1__.default.projectTitle(project);\n    var projectDescription = _components__WEBPACK_IMPORTED_MODULE_1__.default.projectDescription(project);\n    projectContainer.appendChild(projectTitle);\n    projectContainer.appendChild(projectDescription);\n    asidePanel.appendChild(projectContainer);\n    projectTitle.addEventListener(\"click\", loadProject);\n  };\n\n  var loadProject = function loadProject(e) {\n    e.target.classList.toggle(\"project__title--active\");\n    e.target.nextElementSibling.classList.toggle(\"project__description--hidden\");\n  };\n\n  function assignListeners() {\n    addButton.addEventListener('click', drawNewProject);\n  }\n\n  ;\n  return {\n    init: init,\n    drawNewProject: drawNewProject,\n    removeProject: removeProject\n  };\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);\n\n//# sourceURL=webpack://todo-list/./src/ui.js?");

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