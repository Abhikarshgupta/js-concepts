/**compose is a function that takes a bunch of arguments and executes them in order.
 * concepts it uses internally:-
 * 1. reduce - reduce is a function that takes a bunch of arguments and runs a callback on them.
 * 2. callback - a variable that holds a function definition and can be called later in the program.
 * 3. currying - function that (takes an argument)optional and returns a function.
 * https://www.codementor.io/@michelre/use-function-composition-in-javascript-gkmxos5mj == reference point
 */

const addTwoNumbers = (num1) => (num2) => {
	console.log({ num1, num2 });
	return num1 + num2;
};

const addNumbers = (cb) => (arr) =>
	arr.reduce((prev, curr) => cb(prev, curr), 0);

// arr.reduce((prev, curr) => prev + curr, 0);

const multiplyTwoNumbers = (num1) => (num2) => num1 * num2;
const divideTwoNumbers = (num1) => (num2) => {
	if (num2 === 0) {
		return 1;
	}
	return num1 / num2;
};

// const performComplexCalculation = (functionArr) => (arguments) =>
// 	functionArr.reduceRight((argument, fn) => {
// 		const x = arguments.reduceRight((prev, curr) => {
// 			console.log("called", curr, fn);
// 			const z = fn(curr);
// 			const y = z(1);
// 			return prev + y;
// 		}, 0);
// 		console.log({ x });
// 	}, 0);

// console.log(
// 	performComplexCalculation([
// 		multiplyTwoNumbers,
// 		divideTwoNumbers,
// 		addTwoNumbers,
// 	])([1, 12])
// );

const performComplexCalculation1 = (functionArr) => (arguments) =>
	functionArr.reduce((prev, curr) => {
		console.log({ prev, curr });
	}, arguments);
// const

console.log(
	performComplexCalculation1([addNumbers((num1, num2) => num1 + num2)])([1, 2])
);
