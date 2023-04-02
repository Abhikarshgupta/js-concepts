const istrue = true;
const promise1 = new Promise((resolve, reject) => {
	if (istrue) resolve("resolved1");
	reject("rejected");
});
const promise2 = new Promise((resolve, reject) => {
	if (istrue) resolve("resolved2");
	reject("rejected");
});

const promise3 = new Promise((resolve, reject) => {
	if (istrue) resolve("resolved3");
	reject("rejected");
});

// promise1.then(res => console.log(res));
// Promise.all([promise1, promise2, promise3]).then((res) => console.log(res)).catch(err => console.log('catch', err));

const PromiseArray = [promise1, promise2, promise3];

const promisePolyfill = (promiseArray) => {
	let resolvedResults = [];
	let resolvedCount = 0;
	return new Promise(async (resolve, reject) => {
		console.log("here");
		promiseArray.forEach(async (promise) => {
			console.log("inside");
			await promise
				.then((result) => {
					// console.log('here', result, resolvedCount);
					resolvedResults.push(result);
					resolvedCount++;
					if (resolvedCount === promiseArray.length) {
						resolve(resolvedResults);
					}
				})
				.catch((err) => reject(err));
		});
		console.log(resolvedCount);
		if (resolvedCount === promiseArray.length) {
			resolve(resolvedResults);
		}
	});
};
promisePolyfill(PromiseArray)
	.then((res) => console.log("res", res))
	.catch((err) => console.log("err", err));

// some commit 1
