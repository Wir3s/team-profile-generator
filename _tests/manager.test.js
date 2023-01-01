const Employee = require("../lib/employee");
const Manager = require("../lib/manager");

describe("Manager", () => {
  it("should return the name, email, ID and office number of the manager", () => {
    // Arrange

    const name = "Andre";
    const email = "andre@andre.com";
    const id = "451";
    const officeNum = "22";

    // Act

    const obj = new Manager(name, email, id, officeNum);

    // Assert

    expect(obj.name).toEqual(name);
    expect(obj.email).toEqual(email);
    expect(obj.id).toEqual(id);
    expect(obj.officeNum).toEqual(officeNum);
  });
});
