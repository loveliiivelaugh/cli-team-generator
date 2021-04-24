//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./src/generateHtml.js');
const { managerQuestions, engineerQuestions, internQuestions } = require("./data/questions");
const { Manager, Engineer, Intern } = require("./lib/classes.js");


const employees = [];

//Create a function to write README file
const writeToFile = (fileName, data) => fs.writeFile(fileName, data, err => err ? console.error(err) : console.log('Success!'));

const useInquirer = type => {

  const questionsGroup = {
    "Manager": managerQuestions,
    "Engineer": engineerQuestions,
    "Intern": internQuestions
  };

  return inquirer
    .prompt(questionsGroup[type])
    .then(answers => answers)
    .catch(error => error.isTtyError ? console.error(error.isTtyError) : console.error(error));
};

const setData = async type => {
  const response = await useInquirer(type);

  const setEmployee = {
    "Manager": (name, id, email, office) => employees.push(new Manager(name, id, email, office)),
    "Engineer": (name, id, email, github) => employees.push(new Engineer(name, id, email, github)),
    "Intern": (name, id, email, school) => employees.push(new Intern(name, id, email, school))
  };

  const { name, email, id } = response;

  setEmployee[type]( name, id, email, response.office || response.github || response.school);

  return response.createNewEmployee == "Engineer" ? 
  setData("Engineer") : 
  response.createNewEmployee == "Intern" ? 
  setData("Intern") : 
  response.createNewEmployee == "Quit" &&
  employees;

};

//Create a function to initialize app
const init = async () => writeToFile("./dist/index.html", generateHtml(await setData("Manager")));

// Function call to initialize app
init();