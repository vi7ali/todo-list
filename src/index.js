"use strict";

import UI from "./ui";
import Todo from "./todo";

UI.init();
Todo.addProject("Project ONE", "sdfsd");
Todo.addTask("projectone", "dfd", "dfsd", "sdfs");
Todo.getProject("project2").tasks[1].name;
Todo.deleteProject("project1");
Todo.deleteTask("project2", "task1");
Todo.getTask("project2", "task1");
console.log(Todo.getTask("project1", "task3"));
Todo.getProject("project1");
Todo.getProject("project2").tasks;
console.log(Todo.list);