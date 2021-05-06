/**
 * Return the first character in the string that occurs only once.
 * @param {string} word the string to be analysed
 */
String.prototype.count = function (c) {
	var result = 0,
		i = 0;
	for (i; i < this.length; i++) if (this[i] == c) result++;
	return result;
};
function firstSingleCharacter(word) {
	for (let i = 0; i < word.length; i++) {
		// if (word.indexOf(word[i]) == word.lastIndexOf(word[i])) {
		if (word.count(word[i]) == 1) {
			return word[i];
		}
	}
	return null;
}

module.exports = firstSingleCharacter;
