/**
 * return the union of two sets
 */
function union(setA, setB) {
	let _union = new Set(setA);
	for (let elem of setB) {
		_union.add(elem);
	}
	return _union;
}

/**
 * return the intersection of two sets
 */
function intersect(setA, setB) {
	let _intersection = new Set();
	for (let elem of setB) {
		if (setA.has(elem)) {
			_intersection.add(elem);
		}
	}
	return _intersection;
}

/**
 * return the difference of two sets
 */
function difference(setA, setB) {
	let _difference = new Set(setA);
	for (let elem of setB) {
		_difference.delete(elem);
	}
	return _difference;
}

module.exports = { union, intersect, difference };
