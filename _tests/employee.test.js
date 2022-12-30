const Employee = require("../lib/employee");

describe("Employee", () => {
  it("should return the name and email of the employee", () => {
    // Arrange

    const name = "Andre";
    const email = "andre@andre.com";

    // Act

    const obj = new Employee(name, email);

    // Assert

    expect(obj.name).toEqual(name);
    expect(obj.email).toEqual(email);
  });

  // Exception test
  it("should throw an error if email address does not contain '@'", () => {
    // Arrange
    const cb = () => new Employee("Andre", "andregmail.com");
    const err = new Error("Not a valid email address");

    // Assert
    expect(cb).toThrowError(err);
  });
});
