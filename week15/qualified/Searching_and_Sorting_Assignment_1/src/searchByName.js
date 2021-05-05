/**
 * Use a binary search to find the customer with given name
 * @param {string} firstName
 * @param {string} lastName
 * @param {array} customers
 */
function searchByName(firstName, lastName, customers) {
	return indexOf((value) => {
		if (value.lastName < lastName) {
			return 1;
		} else if (value.lastName === lastName) {
			if (firstName === value.firstName) {
				return 0;
			} else if (value.firstName < fistName) {
				return 1;
			} else {
				return -1;
			}
		} else {
			return -1;
		}
	}, customers);
}

function indexOf(compare, sortedElements) {
	if (Array.isArray(sortedElements) && sortedElements.length > 0) {
		return theIndexOf(compare, sortedElements, sortedElements.length - 1, 0);
	}
	return -1;
}

function theIndexOf(compare, sortedElements, upperIndex, lowerIndex) {
	if (lowerIndex > upperIndex) {
		return -1;
	}
	const index = Math.floor((upperIndex + lowerIndex) / 2);

	let temp = compare(sortedElements[index]);

	if (temp > 0) {
		lowerIndex = index + 1;
		return theIndexOf(compare, sortedElements, upperIndex, lowerIndex);
	}

	if (temp === 0) {
		return index;
	}

	if (temp < 0) {
		upperIndex = index - 1;
		return theIndexOf(compare, sortedElements, upperIndex, lowerIndex);
	}
}
// const data = require("./data.json");
// searchByName("Rickie", "Schulist", data);
module.exports = searchByName;
