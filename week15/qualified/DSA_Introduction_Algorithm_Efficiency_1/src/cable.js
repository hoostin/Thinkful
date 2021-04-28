/**
 The cable problem
 Implement algorithm 1 here
*/
function cable1(currentLength, requiredLength, saleLength) {
  let count = 0;
  let i = currentLength;
  while (i < requiredLength) {
    i += saleLength;
    count++;
  }
  return count;
}
/**
 The cable problem
 Implement algorithm 2 here
*/
function cable2(currentLength, requiredLength, saleLength) {
  const distance = requiredLength - currentLength;
  return Math.ceil(distance / saleLength);
}
module.exports = { cable1, cable2 };
