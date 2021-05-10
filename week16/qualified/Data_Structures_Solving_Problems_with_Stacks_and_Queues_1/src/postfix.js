const Stack = require("./lib/stack");
const evaluate = (expression) => {
	const theStack = new Stack();
	expression = expression.replace(/\s+/g, "");
	for (let i = 0; i < expression.length; i++) {
		if (!isNaN(expression[i])) {
			theStack.push(expression[i]);
		} else {
			const b = theStack.pop();
			const a = theStack.pop();
			const result = eval(a + expression[i] + b);
			theStack.push(result);
		}
	}
	return theStack.pop();
};

module.exports = evaluate;
