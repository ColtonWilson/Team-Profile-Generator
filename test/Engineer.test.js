const Engineer = require("../lib/Engineer");

describe("EngineerTests", () => {
    describe("Initiate", () => {
        it("should set 'GitHub account' when created", () =>{
            const testValue = "GitHubUser";
            const e = new Engineer("Foo", 1, "test@test.com", testValue);
            expect(e.github).toBe(testValue);
        });
    });

    describe("get_functions_engineer", () => {
        it("should return 'Engineer' via function parameter getRole()", () =>{
            const testValue = "Engineer";
            const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
            expect(e.getRole()).toBe(testValue);
        });

        it("should return GitHub username via function parameter getGithub()", () =>{
            const testValue = "GitHubUser";
            const e = new Engineer("Foo", 1, "test@test.com", testValue);
            expect(e.getGithub()).toBe(testValue);
        });
    });


});

