class BinarySearchTree {
	constructor(key = null, value = null, parent = null) {
		this.key = key;
		this.value = value;
		this.parent = parent;
		this.left = null;
		this.right = null;
	}

	insert(key, value = key) {
		// your solution here
		if (this.key != null) {
			this.insertRecurse(this, key, value);
		} else {
			this.key = key;
			this.value = value;
		}
	}
	insertRecurse(node, key, value) {
		if (!node) {
			return;
		}
		if (node.key <= key) {
			if (node.right) {
				return this.insertRecurse(node.right, key, value);
			}

			node.right = new BinarySearchTree(key, value, node);
		}
		if (node.key > key) {
			if (node.left) {
				return this.insertRecurse(node.left, key, value);
			}
			node.left = new BinarySearchTree(key, value, node);
		}
	}
	find(key) {
		if (!this.key) throw Error("BAD 1");
		const value = this.findRecurse(this, key);

		if (value == undefined) throw Error("BAD 2");
		return value;
		// your solution here
	}
	findRecurse(node, key) {
		if (!node) {
			return;
		}
		if (node.key === key) {
			return node.value;
		}
		if (node.key > key) {
			return this.findRecurse(node.left, key);
		}
		return this.findRecurse(node.right, key);
	}
	_replaceWith(node) {
		if (this.parent) {
			if (this == this.parent.left) {
				this.parent.left = node;
			} else if (this == this.parent.right) {
				this.parent.right = node;
			}

			if (node) {
				node.parent = this.parent;
			}
		} else {
			if (node) {
				this.key = node.key;
				this.value = node.value;
				this.left = node.left;
				this.right = node.right;
			} else {
				this.key = null;
				this.value = null;
				this.left = null;
				this.right = null;
			}
		}
	}

	_findMin() {
		if (!this.left) {
			return this;
		}
		return this.left._findMin();
	}
	remove(key) {
		if (this.key == key) {
			if (this.left && this.right) {
				const successor = this.right._findMin();
				this.key = successor.key;
				this.value = successor.value;
				successor.remove(successor.key);
			} else if (this.left) {
			/* If the node only has a left child,
           then you replace the node with its left child. */
				this._replaceWith(this.left);
			} else if (this.right) {
			/* And similarly, if the node only has a right child,
           then you replace it with its right child. */
				this._replaceWith(this.right);
			} else {
			/* If the node has no children, then
           simply remove it and any references to it
           by calling `this._replaceWith(null)`. */
				this._replaceWith(null);
			}
		} else if (key < this.key && this.left) {
			this.left.remove(key);
		} else if (key > this.key && this.right) {
			this.right.remove(key);
		} else {
			throw new Error("Key Not Found");
		}
	}

	// getNode(node, key) {
	// 	if (!node) {
	// 		return null;
	// 	}
	// 	if (node.key === key) {
	// 		return node;
	// 	}
	// 	if (node.key > key) {
	// 		return this.getNode(node.left, key);
	// 	}
	// 	return this.getNode(node.right, key);
	// }

	// leftMost(node) {
	// 	if (!node) {
	// 		return null;
	// 	}
	// 	if (node.left) {
	// 		return this.leftMost(node.left);
	// 	}
	// 	if (node) node.remove(node.key);
	// 	return node;
	// }
	// rightMost(node) {
	// 	if (!node) {
	// 		return null;
	// 	}
	// 	if (node.right) {
	// 		return this.rightMost(node.right);
	// 	}
	// 	if (node) node.remove(node.key);
	// 	return node;
	// }
	// logTree(node) {
	// 	if (node) {
	// 		console.log("Current: ", node.key);
	// 		console.log("Left:", node.left.key);
	// 		console.log("Right: ", node.right.key);
	// 		// console.log("Left:", this.logTree(node.left));
	// 		// console.log("Right: ", this.logTree(node.right));
	// 	}
	// }
	// remove(key) {
	// 	// your solution here
	// 	const node = this.getNode(this, key);
	// 	if (node) {
	// 		const nextNode = node.right
	// 			? this.leftMost(node.right)
	// 			: this.rightMost(node.left);
	// 		if (nextNode) {
	// 			node.key = nextNode.key;
	// 			node.value = nextNode.value;
	// 		} else {
	// 			node.key = null;
	// 			node.value = null;
	// 		}
	// 	} else {
	// 		throw Error("Critical Failure Install more free Ram");
	// 	}
	// 	console.log("TOP LEVEL");
	// 	this.logTree(this);
	// }
}

module.exports = BinarySearchTree;
// inOrderSuccessor(node) {
// 	if (node) {
// 		switch (true) {
// 			case !node.left && !node.right:
// 				if (node.parent.key < key) {
// 					node.parent.right = null;
// 				} else {
// 					node.parent.left = null;
// 				}
// 				return node;
// 				break;
// 			case !node.left:
// 				break;
// 			default:
// 				break;
// 		}
// 	} else {
// 		throw Error("BAD 1");
// 	}
// }
