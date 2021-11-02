'use strict';

import UI from './ui'
import Task from './task'
import Project from './project'
import List from './list'

const list = List();
list.setProjects('project1');
console.log(list.getProjects());
console.log(list);