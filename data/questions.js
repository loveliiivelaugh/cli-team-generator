//Create an array of questions for user input
const questions = [
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
    type: 'rawlist',
    name: 'position',
    message: 'What is your position?',
    choices: ["Manager", "Engineer", "Intern"],
    default: 2
  },
  {
    type: 'number',
    name: 'office',
    message: 'What is your office number?',
    when: answers => answers.position == "Manager"
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
    when: answers => answers.position == "Engineer"
  },
  {
    type: 'input',
    name: 'school',
    message: 'What school do you attend?',
    when: answers => answers.position == "Intern"
  },
  {
    type: 'confirm',
    name: 'createNewEmployee',
    message: 'Would you like to create another employee?',
    default: true
  }
];

module.exports = questions;