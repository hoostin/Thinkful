class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
	}

	enqueue(value) {
		// your solution here
		if (!this.first) {
			this.first = new Node(value);
			this.last = this.first;
		} else {
			const temp = this.last;
			this.last = new Node(value);
			temp.next = this.last;
		}
	}

	dequeue() {
		// your solution here
		if (this.first) {
			const dequeued = this.first;

			// Update first pointer to point to the next node of the dequeued node
			this.first = dequeued.next;

			// If the dequeued node is the last node in the queue,
			// update the last pointer to point to `null`
			if (dequeued === this.last) {
				this.last = null;
			}

			return dequeued.value;
		}
	}
}

module.exports = Queue;
