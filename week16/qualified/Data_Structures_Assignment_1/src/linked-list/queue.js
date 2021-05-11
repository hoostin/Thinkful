const LinkedList = require("./linkedList");

/**
 * Implement a Queue using nothing more than a LinkedList.
 */

class Queue {
	constructor() {
		this.linkedList = new LinkedList();
	}

	enqueue(value) {
		this.linkedList.insert(value);
		return this.linkedList.head.value;
	}

	dequeue() {
		const value = this.linkedList.head.value;
		this.linkedList.remove((node) => node.value === value);
		return value;
	}
	peek() {
		return this.linkedList.head.value;
	}

	isEmpty() {
		return this.linkedList.head === null;
	}
}

module.exports = Queue;
