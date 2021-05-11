/**
 * Node is used to store values in a Queue
 */
class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
	}

	enqueue(value) {
		const newNode = new Node(value);

		if (this.first) {
			this.last.next = newNode;
		} else {
			// Set the node of the queue's next to be the new node
			this.first = newNode;
		}

		//make the new node the last item on the queue
		this.last = newNode;
	}

	dequeue() {
		if (this.first) {
			const dequeued = this.first;
			this.first = dequeued.next;

			if (dequeued === this.last) {
				this.last = null;
			}

			return dequeued.value;
		}
	}

	peek() {
		return this.first.value;
	}

	isEmpty() {
		return this.first === null;
	}
	findWithPrevious(isMatch) {
		let index = 0;
		let previous = null;
		let node = this.first;
		while (node) {
			if (isMatch(node, index, this)) {
				return [node, previous];
			}
			index++;
			previous = node;
			node = node.next;
		}
		return [null, null];
	}
	remove(isMatch) {
		const [matchedNode, previousNode] = this.findWithPrevious(isMatch);

		if (!matchedNode) {
			return null;
		}

		if (this.first === matchedNode) {
			this.first = this.first.next;
		} else {
			previousNode.next = matchedNode.next;
		}
		return matchedNode.value;
	}
}

module.exports = Queue;
