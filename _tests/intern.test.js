const Intern = require("../lib/intern");

describe("Intern", () => {
  it("should return the name, email, ID and school of the intern", () => {
    // Arrange

    const name = "Andre";
    const email = "andre@andre.com";
    const id = "451";
    const school = "UofM";

    // Act

    const obj = new Intern(name, email, id, school);

    // Assert

    expect(obj.name).toEqual(name);
    expect(obj.email).toEqual(email);
    expect(obj.id).toEqual(id);
    expect(obj.school).toEqual(school);
  });
});
