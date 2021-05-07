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
	}
}

module.exports = Queue;
