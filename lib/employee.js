// Constructor function to create employees

function Employee (name, email) {
    if(email.includes("@") === false) {
        throw new Error("Not a valid email address");
    }

    this.name = name;
    this.email = email;
}

module.exports = Employee;

