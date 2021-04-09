/*
  Write a function that separates students into two buckets based on a given score. The end result for the "happy path" should be an array with two arrays inside of it.
*/

function partitionStudentsByScore(students, score) {
  if(students.length ===0){return [[],[]];}
  const greaterScore = students.filter((student)=> student.score > score);
  const equalOrLess = students.filter((student)=> student.score <= score);
  return [...equalOrLess,greaterScore];
}

module.exports = partitionStudentsByScore;
