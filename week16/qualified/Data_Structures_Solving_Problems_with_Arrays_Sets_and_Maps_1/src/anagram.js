/**
 * Return true if s1 is an anagram of s2
 * @param {string} s1
 * @param {string} s2
 */
Array.prototype.equals = function (arr2) {
	return (
		this.length === arr2.length &&
		this.every((value, index) => value === arr2[index])
	);
};
function anagram(s1, s2) {
	const length = s1.length;
	if (s2.length != length) {
		return false;
	}
	s1 = s1.toLowerCase();
	s2 = s2.toLowerCase();
	let s1Array = s1.split("");
	let s2Array = s2.split("");
	s1Array.sort();
	s2Array.sort();

	if (s1Array.equals(s2Array)) {
		return true;
	}
	return false;
	//if (s2.valueOf() === s1.valueOf()) return true;
}

module.exports = anagram;
