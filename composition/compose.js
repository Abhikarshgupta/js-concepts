/**compose is a function that takes a bunch of arguments and executes them in order.
 * concepts it uses internally:-
 * 1. reduce - reduce is a function that takes a bunch of arguments and runs a callback on them.
 * 2. callback - a variable that holds a function definition and can be called later in the program.
 * 3. currying - function that (takes an argument)optional and returns a function.
 * https://www.codementor.io/@michelre/use-function-composition-in-javascript-gkmxos5mj == reference point
 */
const addNumbers = (cb) => (arr) =>
	arr.reduce((prev, curr) => cb(prev, curr), 0);

const multiplyNumbers = (cb) => (arr) =>
	arr.reduce((prev, curr) => cb(prev, curr), 1);

const divideNumbers = (cb) => (arr) =>
	arr.reduce((prev, curr) => cb(prev, curr), 1);

const performComplexCalculation = (functionArr) => (arguments) => {
	const result = [];
	functionArr.reduceRight((prev, curr) => {
		const x = curr(prev);
		result.push(x);
		return prev;
	}, arguments);
	return result;
};

console.log(
	performComplexCalculation([
		addNumbers((num1, num2) => num1 + num2),
		multiplyNumbers((num1, num2) => num1 * num2),
		divideNumbers((num1, num2) => {
			if (num2 === 0) return 1;
			return num1 / num2;
		}),
	])([1, 2, 4, 5, 6])
);
