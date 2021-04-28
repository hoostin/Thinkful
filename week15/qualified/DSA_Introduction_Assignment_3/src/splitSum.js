/**
 * Write a function named splitSum1 that implements algorithm 1 here
 */

function splitSum1(tours) {
  let total = tours.reduce((acc, ele) => acc + ele);
  let preSum = 0;
  let postSum = total;
  let smallest = Infinity;

  for (let i = 0; i < tours.length - 1; i++) {
    preSum += tours[i];
    postSum -= tours[i];
    const difference = Math.abs(postSum - preSum);

    if (difference < smallest) {
      smallest = difference;
    }
  }
  return smallest;
}
/**
 * Write a function named splitSum2 that implements algorithm 2 here
 */

function splitSum2(tours) {
  let smallest = Infinity;
  for (let k = 0; k < tours.length - 1; k++) {
    let preSum = 0;
    let postSum = 0;
    for (let i = 0; i <= k; i++) {
      preSum += tours[i];
    }
    for (let q = k + 1; q < tours.length; q++) {
      postSum += tours[q];
    }
    const difference = Math.abs(postSum - preSum);
    if (difference < smallest) {
      smallest = difference;
    }
  }
  return smallest;
}
module.exports = { splitSum1, splitSum2 };
