/**
 The missing number problem
 Implement algorithm 1 here
*/

function factorialize(num) {
  if (num < 0) return -1;
  else if (num == 0) return 1;
  else {
    return num + factorialize(num - 1);
  }
}

function missing1(A) {
  const N = A.length + 1;
  for (let i = 1; i < N; i++) {
    let found = false;
    let j = 0;
    while (found === false && j < A.length) {
      if (i === A[j]) {
        found = true;
      }
      j++;
    }
    if (!found) return i;
  }
}

/**
The missing number problem
Implement algorithm 2 here
*/
function missing2(A) {
  const N = A.length + 1;
  const fullSum = factorialize(N);
  const sum = A.reduce((acc, element) => {
    return acc + element;
  });
  return fullSum - sum - 1;
}
module.exports = { missing1, missing2 };
