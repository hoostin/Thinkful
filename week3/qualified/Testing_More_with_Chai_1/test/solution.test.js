// Write your tests here!
const findStudentByName = require('../src/solution');
const expect = require("chai").expect;
describe("findStudentByName", ()=>{
    it("should return correct student given name", ()=>{
        const students = [
            { name: "Leo Yeon-Joo", score: 8.9 },
            { name: "Morgan Sutton", score: 7.4 },
            { name: "Natalee Vargas", score: 9.2 },
          ];
        const actual = findStudentByName(students, "Morgan Sutton");
        const expected = { name: "Morgan Sutton", score: 7.4 };
        expect(actual).to.eql(expected);          
    })

    it("should return null with inncorrect name", () =>{
        const students = [
            { name: "Leo Yeon-Joo", score: 8.9 },
            { name: "Morgan Sutton", score: 7.4 },
            { name: "Natalee Vargas", score: 9.2 },
          ];
        const actual = findStudentByName(students, "fake");
        expect(actual).to.be.null;
    })
});