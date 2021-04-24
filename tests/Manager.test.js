const { Manager } = require("../lib/classes");

describe("Manager", () => {

  describe("Initialization", () => {
    it("should create an object with 'name', 'index', 'email', and 'office number'", () => {
      const manager = new Manager("Tester", 1, "test@test.test", 1);

      expect(manager).toEqual({name: "Tester", index: 1, email: "test@test.test"});
    });
  });

  describe("getName", () => {
    it("should return the value of the name property on the object", () => {
      const manager = new Manager("Tester", 1, "test@test.test", 1);

      const name = manager.getName();

      expect(name).toEqual("Tester");
    });
  });

  describe("getId", () => {
    it("should return the value of the id property on the object", () => {
      const manager = new Manager("Tester", 1, "test@test.test", 1);

      const id = manager.getId();

      expect(id).toEqual(1);
    });
  });

  describe("getEmail", () => {
    it("should return the value of the email property on the object", () => {
      const manager = new Manager("Tester", 1, "test@test.test", 1);

      const email = manager.getEmail();

      expect(email).toEqual("test@test.test");
    });
  });

  describe("getRole", () => {
    it("should return the value of the role property on the object", () => {
      const manager = new Manager("Tester", 1, "test@test.test", 1);

      const role = manager.getRole();

      expect(role).toEqual("Manager");
    });
  });

});