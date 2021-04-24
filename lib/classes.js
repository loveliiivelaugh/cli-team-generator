class Employee {
  constructor(name, index, email) {
    this.name = name;
    this.id = index;
    this.email = email;
  }

  getName() { return this.name; }

  getId() { return this.name; }

  getEmail() { return this.name; }

  getRole() { return "Employee"; }
}

class Manager extends Employee {
  constructor(name, index, email, officeNumber) {
    
    super(name, index, email);
    
    this.officeNumber = officeNumber;
  }
  
  getRole() { return "Manager"; }

}

class Engineer extends Employee {
  constructor(name, index, email, github) {
    
    super(name, index, email);
    
    this.github = github;
  }

  getGithub() { return this.github; }

  getRole() { return "Engineer"; }
}

class Intern extends Employee {
  constructor(name, index, email, school) {

    super(name, index, email);

    this.school = school;
  }

  getSchool() { return this.school; }

  getRole() { return "Intern"; }
}

module.exports = { Employee, Manager, Engineer, Intern };