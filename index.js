//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./utils/generateHtml.js');
const questions = require("./data/questions");
const { Manager, Engineer, Intern } = require("./lib/classes.js");


const employees = [];
let id = 0;

//Create a function to write README file
const writeToFile = (fileName, data) => fs.writeFile(fileName, data, err => err ? console.error(err) : console.log('Success!'));

const useInquirer = () => 
    inquirer
      .prompt(questions)
      .then(answers => answers)
      .catch(error => error.isTtyError ? console.error(error.isTtyError) : console.error(error));

const setData = async id => {
  const response = await useInquirer();

  id++;

  const setEmployee = {
    "Manager": (name, id, email, office) => employees.push(new Manager(name, id, email, office)),
    "Engineer": (name, id, email, github) => employees.push(new Engineer(name, id, email, github)),
    "Intern": (name, id, email, school) => employees.push(new Intern(name, id, email, school))
  };

  const { name, email } = response;

  setEmployee[response.position]( name, id, email, response.office || response.github || response.school);

  return response.createNewEmployee ? setData(id) : employees;

};

//Create a function to initialize app
const init = async () => writeToFile("index.html", generateHtml(await setData(id)));

// Function call to initialize app
init();