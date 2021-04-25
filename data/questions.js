const relativeQuestion = (employees, type) => {
  return {
    "Manager": {
      type: 'number',
      name: 'office',
      message: 'What is your office number?',
      validate: value => value.toString().match(/\b([0-9]|[1-9][0-9]|[1-9][0-9][0-9])\b/) ? true : 'Please enter a valid number between 0 - 999'
    },
    "Engineer": {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?',
      validate: value => value.match(/^[a-z0-9_-]{3,15}$/) ? true : 'Please enter a valid username'
    },
    "Intern": {
      type: 'input',
      name: 'school',
      message: 'What school do you attend?',
      validate: value => value.match(/^[a-zA-Z]+ [a-zA-Z]+$/) ? true : 'Please enter a valid school'
    }
  }[type];
};

const questions = (employees, type) => [
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?',
    validate: value => value.match(/^[a-zA-Z]+$/) ? true : 'Please enter a valid name'
  },
  {
    type: 'input',
    name: 'email',
    message: "What is your email?",
    validate: value => value.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/) ? true : 'Please enter a valid email'
  },
  {
    type: 'number',
    name: 'id',
    message: 'What is your employee ID?',
    validate: value => value.toString().match(/\b([0-9]|[1-9][0-9])\b/) ? true : 'Please enter a valid number between 0 - 99'
  },
  relativeQuestion(employees, type),
  {
    type: 'rawlist',
    name: 'createNewEmployee',
    message: 'Would you like to create another employee?',
    choices: ["Engineer", "Intern", "Quit"],
    default: 0
  }
];

module.exports = questions;