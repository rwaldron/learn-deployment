#!/usr/bin/env node

const Learn = require('../learn/index');
const SSHWorkshop = new Learn(__dirname+'/../workshops/ssh/learn');

SSHWorkshop.menu();
