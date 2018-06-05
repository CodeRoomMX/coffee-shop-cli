#!/usr/bin/env node
const inquirer = require('inquirer');

const questions = [
  {type: 'input', name: 'buyer', message: '¿Cuál es tu nombre?'}
];

inquirer.prompt(questions)
.then(function(answers){
  console.log(answers);
});