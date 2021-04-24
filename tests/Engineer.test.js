const { Engineer } = require("../lib/classes");

describe("Engineer", () => {

  describe("Initialization", () => {
    it("should create an object with 'name', 'index', 'email', and 'github username'", () => {
      const engineer = new Engineer("Tester", 1, "test@test.test", "https://github.com/testing123");

      expect(engineer).toEqual({name: "Tester", index: 1, email: "test@test.test"});
    });
  });

  describe("getName", () => {
    it("should return the value of the name property on the object", () => {
      const engineer = new Engineer("Tester", 1, "test@test.test", "https://github.com/testing123");

      const name = engineer.getName();

      expect(name).toEqual("Tester");
    });
  });

  describe("getId", () => {
    it("should return the value of the id property on the object", () => {
      const engineer = new Engineer("Tester", 1, "test@test.test", "https://github.com/testing123");

      const id = engineer.getId();

      expect(id).toEqual(1);
    });
  });

  describe("getEmail", () => {
    it("should return the value of the email property on the object", () => {
      const engineer = new Engineer("Tester", 1, "test@test.test", "https://github.com/testing123");

      const email = engineer.getEmail();

      expect(email).toEqual("test@test.test");
    });
  });

  describe("getRole", () => {
    it("should return the value of the role property on the object", () => {
      const engineer = new Engineer("Tester", 1, "test@test.test", "https://github.com/testing123");

      const role = engineer.getRole();

      expect(role).toEqual("Engineer");
    });
  });

  describe("getGithub", () => {
    it("should return the value of the role property on the object", () => {
      const engineer = new Engineer("Tester", 1, "test@test.test", "https://github.com/testing123");

      const github = engineer.getGithub();

      expect(github).toEqual("https://github.com/testing123");
    });
  });

});