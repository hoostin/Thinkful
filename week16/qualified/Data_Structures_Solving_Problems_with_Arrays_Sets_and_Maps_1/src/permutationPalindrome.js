/**
 * Return true if some permutation of this word is a palindrome
 * @param {string} word The word to check
 */
String.prototype.count = function (c) {
	var result = 0,
		i = 0;
	for (i; i < this.length; i++) if (this[i] == c) result++;
	return result;
};
function permutationPalindrome(word) {
	let count = new Set();
	for (let i = 0; i < word.length; i++) {
		// if (word.indexOf(word[i]) == word.lastIndexOf(word[i])) {
		if (word.count(word[i]) % 2 != 0) {
			count.add(word[i]);
		}
	}
	//console.log(count + word);
	if (count.size > 1) {
		return false;
	}
	return true;
}

module.exports = permutationPalindrome;
