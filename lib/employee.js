// Constructor function to create employees
class Employee {
  constructor(name, email, id) {
    if (email.includes("@") === false) {
      throw new Error("Not a valid email address");
    }

    this.name = name;
    this.email = email;
    this.id = id;

  }
      getName() {
        return this.name;
    }
}

module.exports = Employee;
