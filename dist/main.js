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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\n\nvar Components = function () {\n  var createProjectItem = function createProjectItem(project) {\n    var projectC = createProjectContainer(project);\n    var projectT = createProjectTitle(project);\n    var projectD = createProjectDescription(project);\n    projectC.appendChild(projectT);\n    projectC.appendChild(projectD);\n    return projectC;\n  };\n\n  var createProjectContainer = function createProjectContainer(project) {\n    var container = document.createElement(\"div\");\n    container.classList.add(\"aside__project\");\n    container.setAttribute(\"id\", project.name.replaceAll(\" \", \"\").toLowerCase());\n    return container;\n  };\n\n  var createProjectTitle = function createProjectTitle(project) {\n    var title = document.createElement(\"h2\");\n    title.classList.add(\"project__title\");\n    title.innerText = project.name;\n    return title;\n  };\n\n  var createProjectDescription = function createProjectDescription(project) {\n    var desc = document.createElement(\"p\");\n    var buttons = createDescriptionButtons();\n    desc.classList.add(\"project__description\");\n    desc.classList.add(\"project__description--hidden\");\n    desc.innerHTML = \"<ul class=\\\"project__list\\\"> \\n                        <li class=\\\"list__item\\\">\\n                          <span>Duedate:</span> \\n                          <span>\".concat(project.dueDate, \"</span>\\n                        </li>\\n                        <li class=\\\"list__item\\\">\\n                          <span>Tasks: </span>\\n                          <span>\").concat(project.tasks.length, \"</span>\\n                        </li>                        \\n                      </ul>\");\n    desc.appendChild(buttons);\n    return desc;\n  };\n\n  var createDescriptionButtons = function createDescriptionButtons() {\n    var buttons = document.createElement(\"div\");\n    var vButton = document.createElement(\"button\");\n    var xButton = document.createElement(\"button\");\n    buttons.classList.add(\"buttons_container\");\n    vButton.classList.add(\"project__button\");\n    xButton.classList.add(\"project__button\");\n    vButton.classList.add(\"project__button--v\");\n    xButton.classList.add(\"project__button--x\");\n    buttons.appendChild(xButton);\n    buttons.appendChild(vButton);\n    return buttons;\n  };\n\n  var createModal = function createModal(category) {\n    var modalBackground = document.createElement(\"div\");\n    var modal = document.createElement(\"div\");\n    var modalTitle = document.createElement(\"div\");\n    var modalInput = document.createElement(\"div\");\n    var modalButtons = document.createElement(\"buttons\");\n    var form = document.createElement(\"form\");\n    var modalELements = [modalTitle, form, modalButtons];\n    modalBackground.setAttribute(\"id\", \"modal\");\n    form.setAttribute(\"action\", \"#\");\n    form.setAttribute(\"method\", \"post\");\n    modalTitle.innerHTML = \"<button id=\\\"closeModal\\\" class=\\\"modal__x\\\">X</button>\";\n    form.innerHTML = \"      <fieldset class=\\\"modal__fieldset\\\">\\n                              <legend>Create New \".concat(category, \"</legend>\\n                              <ul class=\\\"modal__ul\\\">\\n                                <li class=\\\"modal__li\\\"><label for=\\\"new\").concat(category, \"Name\\\">\").concat(category, \" name:</label><input class=\\\"input__item\\\" id=\\\"new\").concat(category, \"Name\\\" name=\\\"new\").concat(category, \"Name\\\" type=\\\"text\\\" required></li>\\n                                <li class=\\\"modal__li\\\"><label for=\\\"new\").concat(category, \"DueDate\\\">Deadline:</label><input id=\\\"new\").concat(category, \"DueDate\\\" class=\\\"input__item\\\" type=\\\"date\\\" value=\\\"2022-01-01\\\"></li>\\n                              </ul>\\n                            </fieldset>\\n                            \");\n\n    if (category === \"Task\") {\n      form.innerHTML += \"       <label for=\\\"taskDescription\\\">Task description:</label>\\n                                <textarea id=\\\"taskDescription\\\">To do...</textarea>\\n                              \";\n    }\n\n    modalButtons.innerHTML = \"<button id=\\\"create\".concat(category, \"\\\">Create!</button>\");\n    form.classList.add(\"modal__form\");\n    modalBackground.classList.add(\"modal__background\");\n    modalBackground.classList.add(\"modal--hidden\");\n    modal.classList.add(\"modal\");\n    modalTitle.classList.add(\"modal__title\");\n    form.classList.add(\"modal__input\");\n    modalButtons.classList.add(\"modal__buttons\");\n    modalELements.forEach(function (e) {\n      return modal.appendChild(e);\n    });\n    modalBackground.appendChild(modal);\n    return modalBackground;\n  };\n\n  var createTask = function createTask(task) {\n    var taskCard = document.createElement(\"div\");\n    var taskName = document.createElement(\"div\");\n    var taskDate = document.createElement(\"div\");\n    var taskDesc = document.createElement(\"div\");\n    var vButton = document.createElement(\"button\");\n    taskName.innerText = task.name;\n    taskDate.innerText = \"Due Date: \".concat(task.dueDate);\n    taskDesc.innerText = \"Description: \".concat(task.description);\n    taskName.classList.add(\"task__name\");\n    taskDate.classList.add(\"task__date\");\n    taskDesc.classList.add(\"task__desc\");\n    taskCard.classList.add(\"task__container\");\n    vButton.classList.add(\"project__button\");\n    vButton.classList.add(\"task__button\");\n    vButton.setAttribute(\"id\", \"\".concat(task.name));\n    taskCard.appendChild(taskName);\n    taskCard.appendChild(taskDate);\n    taskCard.appendChild(taskDesc);\n    taskCard.appendChild(vButton);\n    return taskCard;\n  };\n\n  var createTasksGrid = function createTasksGrid(tasks) {\n    var tasksGrid = document.createElement(\"div\");\n    tasksGrid.classList.add(\"tasks__grid\");\n\n    for (var i = 0; i < tasks.length; i++) {\n      var task = createTask(tasks[i]);\n      tasksGrid.appendChild(task);\n    }\n\n    return tasksGrid;\n  };\n\n  var createTasksDetails = function createTasksDetails(tasks) {\n    var tasksContainer = document.createElement(\"div\");\n    var tasksTitle = document.createElement(\"h3\");\n    var tasksGrid = createTasksGrid(tasks);\n    var newTask = document.createElement(\"button\");\n    tasksContainer.classList.add(\"tasks\");\n    newTask.classList.add(\"aside__add\");\n    newTask.classList.add(\"tasks__add\");\n    tasksTitle.innerText = \"Tasks: \".concat(tasks.length);\n    newTask.innerText = \"+\";\n    tasksContainer.appendChild(tasksTitle);\n    tasksContainer.appendChild(newTask);\n    tasksContainer.appendChild(tasksGrid);\n    return tasksContainer;\n  };\n\n  var createProjectDetails = function createProjectDetails(project) {\n    var details = document.createElement(\"div\");\n    var detailsContainer = document.createElement(\"div\");\n    var detailsProjectTitle = document.createElement(\"h2\");\n    var detailsDueDate = document.createElement(\"p\");\n    var tasksContainer = createTasksDetails(project.tasks);\n    details.classList.add(\"details\");\n    detailsContainer.classList.add(\"details__container\");\n    detailsProjectTitle.classList.add(\"details__title\");\n    detailsDueDate.classList.add(\"details__date\");\n    detailsProjectTitle.innerText = project.name;\n    detailsDueDate.innerText = \"Due date: \".concat(project.dueDate);\n    detailsContainer.appendChild(detailsProjectTitle);\n    detailsContainer.appendChild(detailsDueDate);\n    detailsContainer.appendChild(tasksContainer);\n    details.appendChild(detailsContainer);\n    return details;\n  };\n\n  return {\n    createProjectItem: createProjectItem,\n    createModal: createModal,\n    createProjectDetails: createProjectDetails\n  };\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Components);\n\n//# sourceURL=webpack://todo-list/./src/components.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\n\nvar Project = function Project(name, dueDate) {\n  var pName = name;\n  var pDueDate = dueDate;\n  var projectId = name.replaceAll(\" \", \"\").toLowerCase();\n  var tasks = [];\n  return {\n    get tasks() {\n      return tasks;\n    },\n\n    set tasks(newTasks) {\n      tasks = newTasks;\n    },\n\n    get name() {\n      return pName;\n    },\n\n    set name(newName) {\n      pName = newName;\n    },\n\n    get id() {\n      return projectId;\n    },\n\n    set id(newPId) {\n      projectId = newPId;\n    },\n\n    get dueDate() {\n      return pDueDate;\n    },\n\n    set dueDate(newDate) {\n      pDueDate = newDate;\n    }\n\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\n\n\n\n\n\nvar Todo = function () {\n  // Private\n  var list;\n\n  var updateList = function updateList() {\n    _storage__WEBPACK_IMPORTED_MODULE_0__.default.storeList(list);\n    list = _storage__WEBPACK_IMPORTED_MODULE_0__.default.retrieveList();\n  };\n\n  var createDefaultList = function createDefaultList() {\n    var defaultList = {\n      \"Project 1\": (0,_project__WEBPACK_IMPORTED_MODULE_1__.default)(\"Project 1\", \"tomorrow\"),\n      \"Project 2\": (0,_project__WEBPACK_IMPORTED_MODULE_1__.default)(\"Project 2\", \"tomorrow\"),\n      \"Project 3\": (0,_project__WEBPACK_IMPORTED_MODULE_1__.default)(\"Project 3\", \"tomorrow\")\n    };\n    var defaultTasks = [(0,_task__WEBPACK_IMPORTED_MODULE_2__.default)(\"Task 1\", \"1 hour\", \"Do task 1\"), (0,_task__WEBPACK_IMPORTED_MODULE_2__.default)(\"Task 2\", \"2 hour\", \"Do task 2\"), (0,_task__WEBPACK_IMPORTED_MODULE_2__.default)(\"Task 3\", \"3 hour\", \"Do task 3\")];\n\n    for (var project in defaultList) {\n      defaultList[project].tasks = defaultTasks;\n    }\n\n    return defaultList;\n  };\n\n  var projectExists = function projectExists(project) {\n    if (list[project.name] || list[project]) return true;\n    return false;\n  }; //Public\n\n\n  var loadList = function loadList() {\n    list = _storage__WEBPACK_IMPORTED_MODULE_0__.default.retrieveList();\n\n    if (!list) {\n      list = createDefaultList();\n      updateList();\n    }\n  };\n\n  var getProject = function getProject(name) {\n    return list[name];\n  };\n\n  var addProject = function addProject(name, dueDate) {\n    if (!projectExists(name)) {\n      list[name] = (0,_project__WEBPACK_IMPORTED_MODULE_1__.default)(name, dueDate);\n      updateList();\n    }\n  };\n\n  var deleteProject = function deleteProject(project) {\n    delete list[project];\n    updateList();\n  };\n\n  var taskExists = function taskExists(project, task) {\n    if (project.tasks.some(function (t) {\n      return t.name === task;\n    })) return true;\n    return false;\n  };\n\n  var getTask = function getTask(project, task) {\n    return project.tasks.find(function (t) {\n      return t.name === task;\n    });\n  };\n\n  var addTask = function addTask(project, name, dueDate, description) {\n    if (projectExists(project)) {\n      if (!taskExists(project, name)) {\n        project.tasks.push((0,_task__WEBPACK_IMPORTED_MODULE_2__.default)(name, dueDate, description));\n        updateList();\n      }\n    }\n  };\n\n  var deleteTask = function deleteTask(project, task) {\n    if (taskExists(project, task)) {\n      for (var i = 0; i < project.tasks.length; i++) {\n        if (project.tasks[i].name === task) {\n          project.tasks.splice(i, 1);\n          updateList();\n          break;\n        }\n      }\n    }\n  };\n\n  return {\n    get list() {\n      return list;\n    },\n\n    loadList: loadList,\n    getProject: getProject,\n    addProject: addProject,\n    deleteProject: deleteProject,\n    getTask: getTask,\n    addTask: addTask,\n    deleteTask: deleteTask,\n    projectExists: projectExists,\n    taskExists: taskExists\n  };\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);\n\n//# sourceURL=webpack://todo-list/./src/todo.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ \"./src/components.js\");\n\n\n\n\n\n\nvar UI = function () {\n  // Private\n  var asidePanel = document.getElementById(\"aside\");\n  var addButton = document.getElementById(\"add\");\n  var main = document.getElementById(\"main\");\n\n  var populateProjects = function populateProjects() {\n    removeListenersAside();\n    document.querySelectorAll(\".aside__project\").forEach(function (e) {\n      return e.remove();\n    });\n\n    for (var project in _todo__WEBPACK_IMPORTED_MODULE_0__.default.list) {\n      drawProjectItem(_todo__WEBPACK_IMPORTED_MODULE_0__.default.getProject(project));\n    }\n\n    addListenersAside();\n  };\n\n  var addProject = function addProject() {\n    var projectName = document.getElementById(\"newProjectName\").value;\n    var projectDueDate = document.getElementById(\"newProjectDueDate\").value;\n\n    if (projectName.replaceAll(\" \", \"\") !== \"\" && !_todo__WEBPACK_IMPORTED_MODULE_0__.default.projectExists(projectName)) {\n      _todo__WEBPACK_IMPORTED_MODULE_0__.default.addProject(projectName, projectDueDate);\n      populateProjects();\n      closeModal();\n      highlightProject(_todo__WEBPACK_IMPORTED_MODULE_0__.default.getProject(projectName));\n    } else {\n      document.getElementById(\"newProjectName\").style.borderColor = \"red\";\n    }\n  };\n\n  var removeProject = function removeProject(e) {\n    var currentElement = e.target;\n\n    while (currentElement.className !== \"aside__project\") {\n      currentElement = currentElement.parentNode;\n    }\n\n    _todo__WEBPACK_IMPORTED_MODULE_0__.default.deleteProject(currentElement.firstChild.innerText);\n    removeListenersDetails();\n    document.querySelector(\".details\").remove();\n    populateProjects();\n  };\n\n  var addTask = function addTask() {\n    var taskName = document.getElementById(\"newTaskName\").value;\n    var taskDueDate = document.getElementById(\"newTaskDueDate\").value;\n    var taskDescription = document.getElementById(\"taskDescription\").value;\n    var project = _todo__WEBPACK_IMPORTED_MODULE_0__.default.getProject(document.querySelector(\".details__title\").innerText);\n\n    if (taskName.replaceAll(\" \", \"\") !== \"\" && !_todo__WEBPACK_IMPORTED_MODULE_0__.default.taskExists(project, taskName)) {\n      _todo__WEBPACK_IMPORTED_MODULE_0__.default.addTask(project, taskName, taskDueDate, taskDescription);\n      closeModal();\n      populateProjects();\n      highlightProject(project);\n    } else {\n      document.getElementById(\"newTaskName\").style.borderColor = \"red\";\n    }\n  };\n\n  var removeTask = function removeTask(e) {\n    var proj = _todo__WEBPACK_IMPORTED_MODULE_0__.default.getProject(document.querySelector(\".details__title\").innerText);\n    var task = _todo__WEBPACK_IMPORTED_MODULE_0__.default.getTask(proj, e.target.id);\n    _todo__WEBPACK_IMPORTED_MODULE_0__.default.deleteTask(proj, task.name);\n    populateProjects();\n    highlightProject(proj);\n    openProjectDetails(proj);\n  };\n\n  var highlightProject = function highlightProject(project) {\n    var projectNode = document.getElementById(project.id);\n    hideAllProjects();\n    projectNode.childNodes[0].classList.toggle(\"project__title--active\");\n    projectNode.childNodes[1].classList.toggle(\"project__description--hidden\");\n    openProjectDetails(project);\n  };\n\n  var drawProjectItem = function drawProjectItem(project) {\n    var projectItem = _components__WEBPACK_IMPORTED_MODULE_1__.default.createProjectItem(project);\n    asidePanel.appendChild(projectItem);\n  };\n\n  var drawNewProject = function drawNewProject() {\n    openModal(\"Project\");\n    addListenersModal(\"Project\");\n  };\n\n  var drawNewTask = function drawNewTask() {\n    openModal(\"Task\");\n    addListenersModal(\"Task\");\n  };\n\n  var openModal = function openModal(category) {\n    var modal = _components__WEBPACK_IMPORTED_MODULE_1__.default.createModal(category);\n    document.getElementsByTagName(\"body\")[0].appendChild(modal);\n    window.getComputedStyle(modal).opacity; // To trigger transition after appendChild\n\n    modal.classList.toggle(\"modal--hidden\");\n  };\n\n  var closeModal = function closeModal() {\n    var modal = document.getElementById(\"modal\");\n    removeListenersModal();\n    modal.remove();\n  };\n\n  var hideAllProjects = function hideAllProjects() {\n    var allProjects = document.querySelectorAll(\".aside__project\");\n    allProjects.forEach(function (el) {\n      el.childNodes[0].classList.remove(\"project__title--active\");\n      el.childNodes[1].classList.add(\"project__description--hidden\");\n    });\n  };\n\n  var openProjectDetails = function openProjectDetails(project) {\n    var projectDetails = document.querySelector(\".details\");\n\n    if (projectDetails) {\n      removeListenersDetails();\n      projectDetails.remove();\n    }\n\n    var newDetails = _components__WEBPACK_IMPORTED_MODULE_1__.default.createProjectDetails(project);\n    main.appendChild(newDetails);\n    addListenersDetails();\n  };\n\n  var toggleProject = function toggleProject(e) {\n    var proj = _todo__WEBPACK_IMPORTED_MODULE_0__.default.getProject(e.target.innerText);\n    highlightProject(proj);\n  };\n\n  var addListenersAside = function addListenersAside() {\n    addButton.addEventListener(\"click\", drawNewProject);\n    document.querySelectorAll(\".project__title\").forEach(function (proj) {\n      proj.addEventListener(\"click\", toggleProject);\n    });\n    document.querySelectorAll(\".project__button--x\").forEach(function (but) {\n      but.addEventListener(\"click\", removeProject);\n    });\n    document.querySelectorAll(\".project__button--v\").forEach(function (but) {\n      but.addEventListener(\"click\", removeProject);\n    });\n  };\n\n  var removeListenersAside = function removeListenersAside() {\n    addButton.removeEventListener(\"click\", drawNewProject);\n    document.querySelectorAll(\".project__title\").forEach(function (proj) {\n      proj.removeEventListener(\"click\", toggleProject);\n    });\n    document.querySelectorAll(\".project__button--x\").forEach(function (but) {\n      but.removeEventListener(\"click\", removeProject);\n    });\n    document.querySelectorAll(\".project__button--v\").forEach(function (but) {\n      but.removeEventListener(\"click\", removeProject);\n    });\n  };\n\n  var addListenersModal = function addListenersModal(category) {\n    document.getElementById(\"closeModal\").addEventListener(\"click\", closeModal);\n\n    if (category === \"Project\") {\n      document.getElementById(\"createProject\").addEventListener(\"click\", addProject);\n    } else if (category === \"Task\") {\n      document.getElementById(\"createTask\").addEventListener(\"click\", addTask);\n    }\n  };\n\n  var removeListenersModal = function removeListenersModal() {\n    document.getElementById(\"closeModal\").removeEventListener(\"click\", closeModal);\n    document.querySelector(\".modal__buttons\").childNodes[0].removeEventListener(\"click\", addProject);\n  };\n\n  var addListenersDetails = function addListenersDetails() {\n    var vButtons = document.querySelectorAll(\".task__button \");\n    var addTaskButton = document.querySelector(\".tasks__add\");\n    addTaskButton.addEventListener(\"click\", drawNewTask);\n\n    if (vButtons) {\n      vButtons.forEach(function (e) {\n        return e.addEventListener(\"click\", removeTask);\n      });\n    }\n  };\n\n  var removeListenersDetails = function removeListenersDetails() {\n    var vButtons = document.querySelectorAll(\".task__button \");\n    var addTaskButton = document.querySelector(\".tasks__add\");\n    addTaskButton.removeEventListener(\"click\", drawNewTask);\n\n    if (vButtons) {\n      vButtons.forEach(function (e) {\n        return e.removeEventListener(\"click\", removeTask);\n      });\n    }\n  }; // Public\n\n\n  var init = function init() {\n    _todo__WEBPACK_IMPORTED_MODULE_0__.default.loadList();\n    populateProjects();\n  };\n\n  return {\n    init: init\n  };\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);\n\n//# sourceURL=webpack://todo-list/./src/ui.js?");

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