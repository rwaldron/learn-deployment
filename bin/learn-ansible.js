#!/usr/bin/env node

const Learn = require('../learn/index');
const AnsibleWorkshop = new Learn(__dirname+'/../workshops/ansible/learn');

AnsibleWorkshop.menu();
