const handleInput = (event) => {
	// console.log(event.target.value);
	document.getElementById("textOutput").innerText = event.target.value;
};

const Debounce = (fn, delay = 300) => {
	let timeout;
	console.log(timeout);
	return (...args) => {
		if (!timeout) {
			fn.apply(this, args);
		}
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			fn.apply(this, args);
		}, delay);
	};
};
const inputDebounceEl = document.querySelector("input");
const x = Debounce(handleInput, 1000);
inputDebounceEl.addEventListener("keyup", x);
