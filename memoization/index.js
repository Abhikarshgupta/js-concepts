/**
 * memoization is a technique where we can implement a caching mechanism which can help in increasing our performance of the function.
 */

const normalAdditionWith_100 = (num1) => {
	const result = num1 + 100;
	console.log("calculation happened again");
	return result;
};

console.log(normalAdditionWith_100(100));
console.log(normalAdditionWith_100(100));
console.log(normalAdditionWith_100(100));
console.log(normalAdditionWith_100(100));

const memoizedAdditionWith_100 = () => {
	const inputCache = {};
	return function (num1) {
		if (num1 in inputCache) {
			console.log("return from cache");
			return inputCache[num1];
		}
		console.log("new calculation");
		inputCache[num1] = num1 + 100;
		return inputCache[num1];
	};
};
const addNumberWith_100 = memoizedAdditionWith_100();
console.log(addNumberWith_100(200));
console.log(addNumberWith_100(200));
console.log(addNumberWith_100(400));
console.log(addNumberWith_100(400));
