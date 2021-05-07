const cycle = (list) => {
	if (list.head && list.head.next)
		return cycleRecurse(list.head, list.head.next);
	return false;
};
function cycleRecurse(slow, fast) {
	if (fast && fast.next) {
		if (fast === slow) return true;
		return cycleRecurse(slow.next, fast.next.next);
	}
	return false;
}
module.exports = cycle;
