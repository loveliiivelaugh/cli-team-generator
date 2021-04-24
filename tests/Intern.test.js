const { Intern } = require("../lib/classes");

describe("intern", () => {

  describe("Initialization", () => {
    it("should create an object with 'name', 'index', 'email', and 'school'", () => {
      const intern = new Intern("Tester", 1, "test@test.test", "Fictional University");

      expect(intern).toEqual({name: "Tester", id: 1, email: "test@test.test", school: "Fictional University"});
    });
  });

  describe("getName", () => {
    it("should return the value of the name property on the object", () => {
      const intern = new Intern("Tester", 1, "test@test.test", "Fictional University");

      const name = intern.getName();

      expect(name).toEqual("Tester");
    });
  });

  describe("getId", () => {
    it("should return the value of the id property on the object", () => {
      const intern = new Intern("Tester", 1, "test@test.test", "Fictional University");

      const id = intern.getId();

      expect(id).toEqual(1);
    });
  });

  describe("getEmail", () => {
    it("should return the value of the email property on the object", () => {
      const intern = new Intern("Tester", 1, "test@test.test", "Fictional University");

      const email = intern.getEmail();

      expect(email).toEqual("test@test.test");
    });
  });

  describe("getRole", () => {
    it("should return the value of the role property on the object", () => {
      const intern = new Intern("Tester", 1, "test@test.test", "Fictional University");

      const role = intern.getRole();

      expect(role).toEqual("Intern");
    });
  });

  describe("getSchool", () => {
    it("should return the value of the role property on the object", () => {
      const intern = new Intern("Tester", 1, "test@test.test", "Fictional University");

      const school = intern.getSchool();

      expect(school).toEqual("Fictional University");
    });
  });

});