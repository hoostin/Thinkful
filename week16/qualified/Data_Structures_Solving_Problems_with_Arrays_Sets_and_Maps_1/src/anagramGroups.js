Array.prototype.includesArray = function (compareValue) {
	for (let value of this) {
		if (value.equals(compareValue)) {
			return true;
		}
	}
	return false;
};
const anagram = require("./anagram");
/**
 * Return a grouping of words by whether they are anagrams of each other or not
 * @param {array} words to be grouped
 */
function anagramGroups(words) {
	const tempArray = [...words];
	const result = [];
	for (let i = 0; i < tempArray.length; i++) {
		let temp = [];
		for (let word of tempArray) {
			if (anagram(word, tempArray[i])) temp.push(word);
		}
		if (!result.includesArray(temp)) {
			result.push(temp);
		}
	}
	// const test = Array.from(result);
	// console.log(test);
	//tempArray.includesBetter("test");
	return result;
}

module.exports = anagramGroups;
