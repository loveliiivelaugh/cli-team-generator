const { Employee } = require("../lib/classes");

describe("Employee", () => {

  describe("Initialization", () => {
    it("should create an object with 'name', 'index', and 'email'", () => {
      const employee = new Employee("Tester", 1, "test@test.test");

      expect(employee).toEqual({name: "Tester", index: 1, email: "test@test.test"});
    });
  });

  describe("getName", () => {
    it("should return the value of the name property on the object", () => {
      const employee = new Employee("Tester", 1, "test@test.test");

      const name = employee.getName();

      expect(name).toEqual("Tester");
    });
  });

  describe("getId", () => {
    it("should return the value of the id property on the object", () => {
      const employee = new Employee("Tester", 1, "test@test.test");

      const id = employee.getId();

      expect(id).toEqual(1);
    });
  });

  describe("getEmail", () => {
    it("should return the value of the email property on the object", () => {
      const employee = new Employee("Tester", 1, "test@test.test");

      const email = employee.getEmail();

      expect(email).toEqual("test@test.test");
    });
  });

  describe("getRole", () => {
    it("should return the value of the role property on the object", () => {
      const employee = new Employee("Tester", 1, "test@test.test");

      const role = employee.getRole();

      expect(role).toEqual("Employee");
    });
  });

});