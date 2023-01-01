// Constructor function to create employees
class Employee {
  constructor(name, email, id) {
    this.name = name;
    this.email = email;
    this.id = id;

    if (email.includes("@") == false) {
      throw new Error("Not a valid email address");
    }
  }
  getName() {
    return this.name;
  }
  getEmail() {
    return this.email;
  }
  getId() {
    return this.id;
  }
  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
