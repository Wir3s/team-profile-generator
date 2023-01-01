const Employee = require("../lib/employee");

class Manager extends Employee {
  constructor(officeNum) {
    super(officeNum);
    this.officeNum = officeNum;
  }
}

module.exports = Manager;
