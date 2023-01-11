const Manager = require("../lib/Manager");


describe("ManagerTests", () => {
    describe("Initiate", () => {
        it("should set office number when created", () =>{
            const testValue = 1001;
            const e = new Manager("Foo", 1, "test@test.com", testValue);
            expect(e.officeNumber).toBe(testValue);
        });
    });

    describe("get_functions_Manager", () => {
        it("should return 'Manager' via function parameter getRole()", () =>{
            const testValue = "Manager";
            const e = new Manager("Foo", 1, "test@test.com", 1001);
            expect(e.getRole()).toBe(testValue);
        });

        it("should return office number via function parameter getOffice()", () =>{
            const testValue = 1001;
            const e = new Manager("Foo", 1, "test@test.com", testValue);
            expect(e.getOfficeNumber()).toBe(testValue);
        });
    });


});
