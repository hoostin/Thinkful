const Queue = require("./lib/queue");
const binary = (max) => {
	const theQueue = new Queue();
	theQueue.enqueue("1");
	const result = [];
	for (let i = 1; i <= max; i++) {
		const value = theQueue.dequeue();
		result.push(value);
		theQueue.enqueue(value + "0");
		theQueue.enqueue(value + "1");
	}
	return result;
};

module.exports = binary;
