//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./src/generateHtml.js');
const { managerQuestions, engineerQuestions, internQuestions } = require("./data/questions");
const { Manager, Engineer, Intern } = require("./lib/classes.js");

// assign an empty array to hold the collection of employee objects.
const employees = [];

//Create a function to write HTML file
const writeToFile = (fileName, data) => fs.writeFile(fileName, data, error => error ? console.error(error) : console.log('Success!'));

//useInquirer function takes in the type in order to prompt the relative questions.
const useInquirer = type => {

  //switchCase object using the key to return the correct questions group
  const questionsGroup = {
    "Manager": managerQuestions,
    "Engineer": engineerQuestions,
    "Intern": internQuestions
  };

  //once the type of questions has been determined, prompt the user with the questions
  return inquirer
    .prompt(questionsGroup[type])
    .then(answers => answers)//return the captured answers
    .catch(error => error.isTtyError ? console.error(error.isTtyError) : console.error(error));
};

//dataHandler function handles using the answers response to make a new employee object respectively
const dataHandler = async type => {
  //asynchronously await for the answers passing in the type to determine the question group
  const response = await useInquirer(type);

  //switchCase object using the key to fire the relative function that passes the answer data into the appropriate class constructor and then pushes the newly constructed object into the employees array 
  const setEmployee = {
    "Manager": (name, id, email, office) => employees.push(new Manager(name, id, email, office)),
    "Engineer": (name, id, email, github) => employees.push(new Engineer(name, id, email, github)),
    "Intern": (name, id, email, school) => employees.push(new Intern(name, id, email, school))
  };

  //deconstruct the response answer properties 
  const { name, email, id, createNewEmployee, office, github, school } = response;

  //using the type key and setEmployee[type]() => passing in the respective values
  setEmployee[type](name, id, email, office || github || school);

  //pass a conditional and return
  //if Engineer was selected //run the dataHandler() function again passing in the Engineer key
  return createNewEmployee == "Engineer" ? dataHandler("Engineer") :
  //if Intern was selected //run the dataHandler() function again passing in the Intern key
  createNewEmployee == "Intern" ? dataHandler("Intern") :
  //if Quit was selected //end the function returning the employees array
  createNewEmployee == "Quit" && employees;

};

//init() function to initialize app -- using 1 liner and nested functions to call inquirer looping over until we quit, capturing the data, generating the html, and writing it to a file.
const init = async () => writeToFile("./dist/index.html", generateHtml(await dataHandler("Manager")));

module.exports = employees;

// Function call to initialize app
init();