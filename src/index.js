'use strict';

import UI from './ui'
import Task from './task'
import Project from './project'

UI.load();
const task = Task('task', 'tomorrow');
const task2 = Task('task2', 'tomorrow');
const task3 = Task('task3', 'tomorrow');
console.log(`${task.getName()} ${task.getDate()}`);
task.setName(`Mr. Thompson`);
console.log(`${task.getName()} ${task.getDate()}`);
const project1 = Project('project1', 'tomorrow');
project1.addTask(task);
project1.addTask(task2);
project1.addTask(task3);
console.log(project1.tasks[0].id);
console.log(project1.tasks[1].id);
console.log(project1.tasks[2].id);
project1.deleteTask(task2);
console.log(project1.tasks[0].id);
console.log(project1.tasks[1].id);
project1.deleteTask(task);
console.log(project1.tasks[0].id);