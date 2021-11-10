"use strict";

import UI from "./ui";
import Task from "./task";
import Project from "./project";
import Todo from "./todo";

UI.init();
Todo.addProject("Project ONE", "sdfsd");
Todo.addTask("projectone", Task("dfd", "dfsd", "sdfs"));
console.log(Todo.getProject("project2").tasks[1].name);
Todo.deleteProject("project1");
Todo.deleteTask("project2", "task1");
console.log(Todo.getProject("project2").tasks);
console.log(Todo.list);