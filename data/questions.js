//Create an array of questions for user input
const managerQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?'
  },
  {
    type: 'input',
    name: 'email',
    message: "What is your email?",
  },
  {
    type: 'number',
    name: 'id',
    message: 'What is your employee ID?'
  },
  {
    type: 'number',
    name: 'office',
    message: 'What is your office number?'
  },
  {
    type: 'rawlist',
    name: 'createNewEmployee',
    message: 'Would you like to create another employee?',
    choices: ["Engineer", "Intern", "Quit"],
    default: 1
  }
];

const engineerQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?'
  },
  {
    type: 'input',
    name: 'email',
    message: "What is your email?",
  },
  {
    type: 'number',
    name: 'id',
    message: 'What is your employee ID?'
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'rawlist',
    name: 'createNewEmployee',
    message: 'Would you like to create another employee?',
    choices: ["Engineer", "Intern", "Quit"],
    default: 1
  }
];

const internQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?'
  },
  {
    type: 'input',
    name: 'email',
    message: "What is your email?",
  },
  {
    type: 'number',
    name: 'id',
    message: 'What is your employee ID?'
  },
  {
    type: 'input',
    name: 'school',
    message: 'What school do you attend?'
  },
  {
    type: 'rawlist',
    name: 'createNewEmployee',
    message: 'Would you like to create another employee?',
    choices: ["Engineer", "Intern", "Quit"],
    default: 1
  }
];

module.exports = { managerQuestions, engineerQuestions, internQuestions };