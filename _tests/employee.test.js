const Employee = require("../lib/employee");

describe("Employee", () => {
  it("should return the name of the employee", () => {
    // Arrange

    const name = "Andre";

    // Act

    const obj = new Employee(name);

    // Assert

    expect(obj.name).toEqual(name);
  });
});
