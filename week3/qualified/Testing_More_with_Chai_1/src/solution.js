/*
  Write a function that returns a particular student when given a name. If no name matches, return `null`.
*/

function findStudentByName(students, name) 
{
  const match = students.find((student)=> student.name === name);
  if(match)
  {
    return match;
  }
  return null;
}

module.exports = findStudentByName;
