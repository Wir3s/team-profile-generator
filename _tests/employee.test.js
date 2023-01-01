const Employee = require("../lib/employee");

describe("Employee", () => {
  it("should return the name, email, and ID of the employee", () => {
    // Arrange

    const name = "Andre";
    const email = "andre@andre.com";
    const id = "451";

    // Act

    const obj = new Employee(name, email, id);

    // Assert

    expect(obj.name).toEqual(name);
    expect(obj.email).toEqual(email);
    expect(obj.id).toEqual(id);
  });

  // Exception test
  it("should throw an error if email address does not contain '@'", () => {
    // Arrange
    const cb = () => new Employee("Andre", "andregmail.com", "44");
    const err = new Error("Not a valid email address");

    // Assert
    expect(cb).toThrowError(err);
  });
});
