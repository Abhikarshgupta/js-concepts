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

console.log(add(1)(2));

/**
 * the above is naive approach and not extensible. or reusable.
 * to make it extensible, we need to tweak this to accept n parameters. and still perform the calculation.
 * challenges to implement extensibility:-
 * 1. how will i call this function n times?
 * 2. how will this function store result of each call? should result be calculated at the end through array of params? or should there be a return at each level?
 */
