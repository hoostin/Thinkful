class Node {
	constructor(value, next) {
		this.value = value;
		this.next = next;
	}
}

class Stack {
	constructor() {
		this.top = null;
	}

	push(value) {
		// your solution here

		this.top = new Node(value, this.top);
		return this;
	}

	pop() {
		// your solution here
		if (this.top) {
			const data = this.top;
			this.top = this.top.next;
			return data.value;
		} else {
			console.log("There is nothing in the stack");
		}
	}
}

module.exports = Stack;
