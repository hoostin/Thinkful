/**
 * Implement a Stack using nothing more than a LinkedList.
 */

const LinkedList = require("../linked-list/linkedList");

class Stack {
	constructor() {
		this.linkedList = new LinkedList();
	}

	push(value) {
		this.linkedList.insertAtHead(value);
	}

	pop() {
		const head = this.linkedList.head;
		return this.linkedList.remove((node) => node.value === head.value);
	}

	peek() {
		return this.linkedList.head.value;
	}

	isEmpty() {
		return this.linkedList.head === null;
	}
}

module.exports = Stack;
