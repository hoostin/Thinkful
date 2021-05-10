const Stack = require("./lib/stack");

const match = (expression) => {
	const stack = new Stack();
	for (let i = 0; i < expression.length; i++) {
		let el = expression[i];
		if (el === "(" || el === "[" || el === "{") stack.push(el);
		else {
			if (el === ")" || el === "]" || el === "}") {
				if (stack.top) {
					let check = stack.pop();
					if (
						!(
							(check === "(" && el === ")") ||
							(check === "[" && el === "]") ||
							(check === "{" && el === "}")
						)
					)
						return false;
				} else return false;
			}
		}
	}
	return stack.top ? false : true;
};

module.exports = match;
