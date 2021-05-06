/**
 * Implement a brute force algorithm for finding the missing number in an array
 */
function missingNumberBruteForce(numbers) {
	for (let i = 1; i <= numbers.length + 1; i++) {
		if (!numbers.includes(i)) {
			return i;
		}
	}
	//	return numbers.length + 1;
}

/**
 * Use an iterative  strategy for finding the missing number in an array
 */
function missingNumberSum(numbers) {
	let sum1 = 0;
	let sum2 = 0;
	for (let i = 1; i <= numbers.length + 1; i++) {
		sum1 += i;
	}
	for (let i = 0; i < numbers.length; i++) {
		sum2 += numbers[i];
	}
	return sum1 - sum2;
}
// const test = [2, 5, 1, 4, 3, 6, 7, 8, 9, 10, 11, 12, 13, 15];
// missingNumberBruteForce(test);
module.exports = { missingNumberBruteForce, missingNumberSum };
