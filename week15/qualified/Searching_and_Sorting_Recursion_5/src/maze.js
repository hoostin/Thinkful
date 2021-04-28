/**
 * Return a string representing the path through the maze.
 * @param {array} maze
 * @param {array} index The starting point
 */
function mazeSolver(maze, index = [0, 0]) {
  const value = maze[index[0]][index[1]];
  if (value === "e") {
    return "";
  }

  const array1Length = maze.length;
  const array2Length = maze[index[0]].length;
  let down;
  let right;
  let left;
  let up;
  let path = "";
  if (array1Length - 1 > index[0]) {
    down = maze[index[0] + 1][index[1]];
  }
  if (index[1] < array2Length - 1) {
    right = maze[index[0]][index[1] + 1];
  }
  if (index[1] > 0) {
    left = maze[index[0]][index[1] - 1];
  }

  if (index[0] > 0) {
    up = maze[index[0] - 1][index[1]];
  }
  if (down === "e") {
    path += "D";
    return path;
  }
  if (right === "e") {
    path += "R";
    return path;
  }
  if (left === "e") {
    path += "L";
    return path;
  }
  if (up === "e") {
    path += "U";
    return path;
  }

  if (right === " ") {
    path += "R";
    index[1] += 1;
    return path + mazeSolver(maze, index);
  }
  if (down === " ") {
    path += "D";
    index[0] += 1;
    return path + mazeSolver(maze, index);
  }

  if (left === " ") {
    path += "L";
    index[1] -= 1;
    return path + mazeSolver(maze, index);
  }
  if (up === " ") {
    path += "U";
    index[0] -= 1;
    return path + mazeSolver(maze, index);
  }
}
// let maze = [
//   [" ", " ", " ", "*", " ", " ", " "],
//   ["*", "*", " ", "*", " ", "*", " "],
//   [" ", " ", " ", " ", " ", " ", " "],
//   [" ", "*", "*", "*", "*", "*", " "],
//   [" ", " ", " ", " ", " ", " ", "e"],
// ];
// let mySmallMaze = [
//   [" ", "*", " "],
//   [" ", "*", " "],
//   [" ", " ", "e"],
// ];

let mySmallMaze = [
  [" ", "*", " "],
  [" ", " ", " "],
  [" ", "*", "e"],
];
const test = mazeSolver(mySmallMaze);
console.log(test);
module.exports = mazeSolver;
