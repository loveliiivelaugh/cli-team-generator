//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./src/generateHtml.js');
const { managerQuestions, engineerQuestions, internQuestions } = require("./data/questions");
const { Manager, Engineer, Intern } = require("./lib/classes.js");

// assign an empty array to hold the collection of employee objects.
const employees = [];

//Create a function to write HTML file
const writeToFile = (fileName, data) => fs.writeFile(fileName, data, err => err ? console.error(err) : console.log('Success!'));

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

//setData function handles using the answers response to make a new employee object respectively
const setData = async type => {
  //asynchronously await for the answers passing in the type to determine the question group
  const response = await useInquirer(type);

  //switchCase object using the key to fire the relative function that passes the answer data into the appropriate class constructor and then pushes the newly constructed object into the employees array 
  const setEmployee = {
    "Manager": (name, id, email, office) => employees.push(new Manager(name, id, email, office)),
    "Engineer": (name, id, email, github) => employees.push(new Engineer(name, id, email, github)),
    "Intern": (name, id, email, school) => employees.push(new Intern(name, id, email, school))
  };

  //deconstruct the 3 common properties 
  const { name, email, id } = response;

  //using the type key setEmployee() passing in the respective values
  setEmployee[type]( name, id, email, response.office || response.github || response.school);

  //pass a conditional and return
  return response.createNewEmployee == "Engineer" ? //if Engineer was selected
  setData("Engineer") : //run the setData() function again passing in the Engineer key
  response.createNewEmployee == "Intern" ? //if Intern was selected
  setData("Intern") : //run the setData() function again passing in the Intern key
  response.createNewEmployee == "Quit" &&//if Quit was selected
  employees;//end the function returning the employees array

};

//init() function to initialize app -- using 1 liner and nested functions to call inquirer looping over until we quit, capturing the data, generating the html, and writing it to a file.
const init = async () => writeToFile("./dist/index.html", generateHtml(await setData("Manager")));

// Function call to initialize app
init();