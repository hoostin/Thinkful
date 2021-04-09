// Write your tests here!
const partitionStudentsByScore = require("../src/solution");
const expect = require("chai").expect;

describe("partitionStudentsByScore", ()=>{
    it("Should correctly parition students", () => {
        const students = [
            { name: "Leo Yeon-Joo", score: 8.9 },
            { name: "Morgan Sutton", score: 7.4 },
            { name: "Natalee Vargas", score: 9.2 },
          ];
          const actual = partitionStudentsByScore(students, 8);
          const expected = [
            [{ name: "Morgan Sutton", score: 7.4 }],
            [
              { name: "Leo Yeon-Joo", score: 8.9 },
              { name: "Natalee Vargas", score: 9.2 },
            ],
          ];
          expect(actual).to.eql(expected);
          
    })
    it("Should return array of two empty array given empty list", () => {
        const students =[];
        const actual = partitionStudentsByScore(students,2);
        const expected =[[],[]];
        expect(actual).to.eql(expected);
    })
    it("Should be possible for all students to be in same array", () => {
        const students = [
            { name: "Leo Yeon-Joo", score: 8.9 },
            { name: "Morgan Sutton", score: 7.4 },
            { name: "Natalee Vargas", score: 9.2 },
          ];
          const actual = partitionStudentsByScore(students, 1);
          const expected = [
              [],
            [
              { name: "Leo Yeon-Joo", score: 8.9 },
              { name: "Morgan Sutton", score: 7.4 },
              { name: "Natalee Vargas", score: 9.2 },
            ]
          ];
          console.log(actual);
          expect(actual).to.eql(expected);

    })
})