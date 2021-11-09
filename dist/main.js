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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list */ \"./src/list.js\");\n\n\n\n\n\n\n_list__WEBPACK_IMPORTED_MODULE_3__.default.setProjects();\n_list__WEBPACK_IMPORTED_MODULE_3__.default.addProject('Project ONE', 'sdfsd');\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/list.js":
/*!*********************!*\
  !*** ./src/list.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\n\n\n\nvar List = function () {\n  var list = _storage__WEBPACK_IMPORTED_MODULE_0__.default.retrieveList();\n\n  var updateList = function updateList() {\n    _storage__WEBPACK_IMPORTED_MODULE_0__.default.storeList(list);\n    list = _storage__WEBPACK_IMPORTED_MODULE_0__.default.retrieveList(); //Add methods to parsed Project objects from JSON\n\n    for (var project in list) {\n      list[project] = Object.assign((0,_project__WEBPACK_IMPORTED_MODULE_1__.default)(), list[project]);\n    }\n  };\n\n  var createDefaultList = function createDefaultList() {\n    var defaultList = {\n      project1: (0,_project__WEBPACK_IMPORTED_MODULE_1__.default)(\"Project 1\", \"tomorrow\"),\n      project2: (0,_project__WEBPACK_IMPORTED_MODULE_1__.default)(\"Project 2\", \"tomorrow\"),\n      project3: (0,_project__WEBPACK_IMPORTED_MODULE_1__.default)(\"Project 3\", \"tomorrow\")\n    };\n    return defaultList;\n  };\n\n  var setProjects = function setProjects() {\n    if (list === null) {\n      list = createDefaultList();\n    }\n\n    updateList();\n  };\n\n  var addProject = function addProject(name, dueDate) {\n    //Replace all spaces and lowercase of name for object property\n    var projName = name.replaceAll(\" \", \"\").toLowerCase(); //Check for projects with the same name\n\n    if (isValid(projName)) {\n      var newProject = (0,_project__WEBPACK_IMPORTED_MODULE_1__.default)(name, dueDate);\n      list[projName] = newProject;\n      updateList();\n    } else {\n      console.log(\"Duplicated name\");\n    }\n  };\n\n  var isValid = function isValid(name) {\n    for (var project in list) {\n      if (project === name) return false;\n    }\n\n    return true;\n  };\n\n  var getProject = function getProject(name) {\n    return list[name];\n  };\n\n  return {\n    get list() {\n      return list;\n    },\n\n    setProjects: setProjects,\n    getProject: getProject,\n    addProject: addProject\n  };\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (List);\n\n//# sourceURL=webpack://todo-list/./src/list.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar Project = function Project(name, dueDate) {\n  var pName = name;\n  var pDueDate = dueDate;\n  var tasks = [];\n\n  var addTask = function addTask(task) {\n    tasks.push(task);\n  };\n\n  var deleteTask = function deleteTask(task) {\n    var result = tasks.filter(function (obj) {\n      return obj.id !== task.id;\n    });\n    tasks.splice.apply(tasks, [0, tasks.length].concat(_toConsumableArray(result)));\n  };\n\n  return {\n    get name() {\n      return pName;\n    },\n\n    get dueDate() {\n      return pDueDate;\n    },\n\n    set name(newName) {\n      pName = newName;\n    },\n\n    set dueDate(newDate) {\n      pDueDate = newDate;\n    },\n\n    addTask: addTask,\n    deleteTask: deleteTask\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\n\nvar Storage = function () {\n  var retrieveList = function retrieveList() {\n    var list = JSON.parse(localStorage.getItem('gyst-list'));\n    return list;\n  };\n\n  var storeList = function storeList(list) {\n    var newList = JSON.stringify(list);\n    localStorage.setItem('gyst-list', newList);\n  };\n\n  return {\n    retrieveList: retrieveList,\n    storeList: storeList\n  };\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Storage);\n\n//# sourceURL=webpack://todo-list/./src/storage.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\n\nvar Task = function Task(name, dueDate) {\n  return {};\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n//# sourceURL=webpack://todo-list/./src/task.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\n\nvar UI = function () {\n  var load = function load() {\n    localStorage.setItem('Bla', 'hello');\n    console.log(localStorage.getItem('Bla'));\n  };\n\n  return {\n    load: load\n  };\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);\n\n//# sourceURL=webpack://todo-list/./src/ui.js?");

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