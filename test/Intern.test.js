const Intern = require("../lib/Intern");

describe("InternTests", () => {
    describe("Initiate", () => {
        it("should set school when created", () =>{
            const testValue = "Syracuse";
            const e = new Intern("Foo", 1, "test@test.com", testValue);
            expect(e.school).toBe(testValue);
        });
    });

    describe("get_functions_Intern", () => {
        it("should return 'Intern' via function parameter getRole()", () =>{
            const testValue = "Intern";
            const e = new Intern("Foo", 1, "test@test.com", "Syracuse");
            expect(e.getRole()).toBe(testValue);
        });

        it("should return school via function parameter getSchool()", () =>{
            const testValue = "Syracuse";
            const e = new Intern("Foo", 1, "test@test.com", testValue);
            expect(e.getSchool()).toBe(testValue);
        });
    });


});
