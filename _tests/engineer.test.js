const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  it("should return the name, email, ID and github of the manager", () => {
    // Arrange

    const name = "Andre";
    const email = "andre@andre.com";
    const id = "451";
    const gitHub = "wire3s.github";

    // Act

    const obj = new Engineer(name, email, id, gitHub);

    // Assert

    expect(obj.name).toEqual(name);
    expect(obj.email).toEqual(email);
    expect(obj.id).toEqual(id);
    expect(obj.gitHub).toEqual(gitHub);
  });
});