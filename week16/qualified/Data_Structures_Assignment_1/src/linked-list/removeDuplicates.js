/**
 * Remove duplicate values, if any, from a sorted linked list.
 *
 * The algorithm should be O(n) time complexity, therefore it cannot use `find()`.
 *
 * @param sortedLinkedList
 *  a possibly empty link list with all values in lexical order.
 *
 * @returns {LinkedList}
 *  the original linked list with any duplicate values removed.
 */

function removeDuplicates(sortedLinkedList) {
	// TODO: implement an algorithm to remove duplicate values from a sorted linked list.
	removeRecurse(sortedLinkedList.head, sortedLinkedList);

	return sortedLinkedList;
}
function removeRecurse(node, list) {
	if (!node || !node.next) {
		return;
	}
	if (node.value === node.next.value) {
		list.remove((theNode) => node.value === theNode.value);
	}
	removeRecurse(node.next, list);
}
module.exports = removeDuplicates;
