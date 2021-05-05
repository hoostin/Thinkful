const sort = require("./sort");

/**
 * Sort the array of customers by first and last name
 * @param {array} customers
 */
function sortByName(customers) {
	const lastName = sort((a, b) => b.lastName < a.lastName, customers);
	const firstName = sort((a, b) => {
		return a.lastName === b.lastName ? b.firstName < a.firstName : 0;
	}, lastName);
	return firstName;
}

module.exports = sortByName;
