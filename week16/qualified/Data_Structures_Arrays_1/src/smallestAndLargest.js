/**
 * Implement an algorithm that sorts the array then returns the smallest and largest
 */
function largestAndSmallestSort(numbers) {
	if (numbers.length > 0) {
		numbers.sort();
		return [numbers[0], numbers[numbers.length - 1]];
	}
	return [];
}

/**
 * Implement an algorithm that uses iteration to find the smallest and largest
 */
function largestAndSmallestIterate(numbers) {
	if (numbers.length > 0) {
		let smallest = Infinity;
		let max = -Infinity;
		for (let i = 0; i < numbers.length; i++) {
			if (smallest > numbers[i]) {
				smallest = numbers[i];
			}
			if (max < numbers[i]) {
				max = numbers[i];
			}
		}
		return [smallest, max];
	}
	return [];
}

module.exports = { largestAndSmallestIterate, largestAndSmallestSort };
