/**
 * Currying is an implementation concept of JS where a function gets the ability to accept multiple parameters spread over different calls to itself.
 * example: add(2)(3)(4)(5) => returns 14.
 * internal working:-
 * 1. uses callbacks to retain earlier calculations and lexical scope.
 */

// simple implementation.

const add = (num1) => {
	return function (num2) {
		return num1 + num2;
	};
};

console.log("output of basic currying:- ", add(1)(2));

/**
 * the above is naive approach and not extensible. or reusable.
 * to make it extensible, we need to tweak this to accept n parameters. and still perform the calculation.
 * challenges to implement extensibility:-
 * 1. how will i call this function n times?
 * 2. how will this function store result of each call? should result be calculated at the end through array of params? or should there be a return at each level?
 */
// solving problem 1.

const numbers = [1, 2, 3, 4, 5];

// dummy function that will do currying.
const addAllNumberInputs = (input) => {
	if (!Number.isNaN(input)) {
		// add this to current sum.
	}
};
// approach 1:- call function manually as hardcoded.

{
	/*addAllNumberInputs(1)(2)(3)(4)(5)();*/
}

// approach 2. call function through a loop, use callbacks efficiently.
const addMultipleNumbers = (inputNums) => {
	let currResult = null;
	for (let i = 1; i < inputNums.length; i++) {
		currResult = addAllNumberInputs(inputNums[i]);
	}
	// final function to actually get the final answer.
	return currResult();
};

{
	/*addAllNumberInputs(numbers);*/
}

// approach 2 is extensible to solve problem :- how will i call this function n times?.

/**
 * Solving 2. how will this function store result of each call? should result be calculated at the end through array of params? or should there be a return at each level?
 * since we are not sure of the number of times this function will be called, we need a solution that doesn't care about length of array etc.
 * this curried function should only depend on 2 inputs at a time. and return it's calculation..
 * Recursion comes to mind.
 * what will be the terminating condition? --> when no input is sent, return the current running sum..
 * otherwise, just call the function with sum of previous instance! works even with 1 input.
 */

const addAllNumberInputsImplemented = (inputNum1) => {
	return (inputNum2) => {
		// terminating condition
		if (!inputNum2) {
			// this will contain the running sum.
			return inputNum1;
		}
		if (!isNaN(inputNum1) && !isNaN(inputNum2))
			return addAllNumberInputsImplemented(inputNum1 + inputNum2);
		// if wrong inputs, return -1.
		return -1;
	};
};

// calling with hardcoded.

console.log(
	"output of extensible currying:- ",
	addAllNumberInputsImplemented(1)(2)(3)(4)(5)()
);

// calling with function looping.

const addMultipleNumbersImplemented = (numbersList) => {
	let currentFunctionResult = addAllNumberInputsImplemented(numbersList[0]);
	for (let i = 1; i < numbersList.length; i++) {
		currentFunctionResult = currentFunctionResult(numbersList[i]);
	}
	if (typeof currentFunctionResult === "number" && currentFunctionResult === -1)
		return "Wrong inputs received.";
	return currentFunctionResult();
};

console.log(
	"output of extensible and reusable currying:- ",
	addMultipleNumbersImplemented(numbers)
);

console.log(
	"output of extensible and reusable currying (wrong inputs):- ",
	addMultipleNumbersImplemented([...numbers, "asdf"])
);
