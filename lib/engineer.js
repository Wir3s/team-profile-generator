const Employee = require("../lib/employee");

class Engineer extends Employee {
  constructor(name, email, id, gitHub) {
    super(name, email, id);
    this.gitHub = gitHub;
  }
  getGitHub () {
    return this.gitHub;
  }
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;