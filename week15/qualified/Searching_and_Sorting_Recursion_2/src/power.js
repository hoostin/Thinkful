/**
 * Return base raised to the power exponent.
 * @throws Error if exponent is negative
 * @param {integer} base an integer
 * @param {integer} exponent a non-negative integer
 */
function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  }
  if (exponent < 0) {
    throw Error("exponent should be >= 0");
  }

  return base * power(base, exponent - 1);
}

module.exports = power;
