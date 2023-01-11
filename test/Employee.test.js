const Employee = require("../lib/Employee");

describe("EmployeeTests", () => {
    describe("Initiate", () => {
        it("should return an object containing a 'employee' property when called with the 'new' keyword ", () => {
            const e = new Employee();
            expect(typeof(e)).toBe("object");
        });

        it("should set 'name' when created", () =>{
            const name = "Colton";
            const e = new Employee(name);
            expect(e.name).toBe(name);
        });

        it("should set 'id' when created", () =>{
            const testValue = 12;
            const e = new Employee("Foo", testValue);
            expect(e.id).toBe(testValue);
        });

        it("should set 'email' when created", () =>{
            const testValue = "test@test.com";
            const e = new Employee("Foo", 1, testValue);
            expect(e.email).toBe(testValue);
        });
    });

    describe("get_function_parameters", () => {
        it("should return the name via function parameter getName()", () => {
            const testValue = "Colton";
            const e = new Employee(testValue);
            expect(e.getName()).toBe(testValue);
        });

        it("should return the id via function parameter getID()", () => {
            const testValue = 12;
            const e = new Employee("Foo", testValue);
            expect(e.getId()).toBe(testValue);
        });

        it("should return the email via function parameter getEmail()", () => {
            const testValue = "test@test.com";
            const e = new Employee("Foo", 1, testValue);
            expect(e.getEmail()).toBe(testValue);
        });

        it("should return 'Employee' via function parameter getRole()", () => {
            const testValue = "Employee";
            const e = new Employee("Alice", 1, "test@test.com");
            expect(e.getRole()).toBe(testValue);
        });
    });
});
