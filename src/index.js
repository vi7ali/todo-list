'use strict';

import UI from './ui'
import Task from './task'

UI.loadUI();
const task = Task('task', 'tomorrow');
console.log(`${task.getName()} ${task.getDate()}`);
