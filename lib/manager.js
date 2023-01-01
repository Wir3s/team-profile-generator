const Employee = require("../lib/employee");

class Manager extends Employee {
  constructor(name, email, id, officeNum) {
    super(name, email, id);
    this.officeNum = officeNum;
  }
  getOffNum () {
    return this.officeNum;
  }
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
