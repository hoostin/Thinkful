/*
  Write a function that returns a particular student's score when given a name. If no name matches, return `null`.
*/

function findStudentScoreByName(students, name) 
{
  let student = students.find((theStudent)=>theStudent.name === name);
  if(student)
  {
    return student.score;
  }
  return null;

}
// const students = [
//   { name: "Leo Yeon-Joo", score: 8.9 },
//   { name: "Morgan Sutton", score: 7.4 },
//   { name: "Natalee Vargas", score: 9.2 },
// ];
// const actual = findStudentScoreByName(students,"Leo Yeon-Joo");
module.exports = findStudentScoreByName;
