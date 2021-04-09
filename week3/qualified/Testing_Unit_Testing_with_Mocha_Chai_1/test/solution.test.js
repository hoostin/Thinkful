// Write your tests here!
const findStudentScoreByName = require("../src/solution");
const expect = require("chai").expect;

describe("findStudentScoreByName" ,() => {
    it("should return null if passed an incorrect name",  ()=>{
        const students = [
            { name: "Leo Yeon-Joo", score: 8.9 },
            { name: "Morgan Sutton", score: 7.4 },
            { name: "Natalee Vargas", score: 9.2 },
          ];
        const actual = findStudentScoreByName(students,"fake name");
        expect(actual).to.equal(null);
    });
    it("should return correct number for correct name", () =>{
        const students = [
            { name: "Leo Yeon-Joo", score: 8.9 },
            { name: "Morgan Sutton", score: 7.4 },
            { name: "Natalee Vargas", score: 9.2 },
          ];
        const actual = findStudentScoreByName(students,"Leo Yeon-Joo");
        const expected = 8.9;
        expect(actual).to.equal(expected);

    })
});