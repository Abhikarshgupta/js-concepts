const throttleMouseMovement = (event) => {
	console.log("mouse moved");
	const showingDiv = document.getElementsByClassName("mouseChangeDiv")[0];
	console.log(showingDiv);
	console.log(event);
	showingDiv.innerHTML = `The mouse has changed it's position to X:${event.clientX}, Y:${event.clientY}`;
};
const throttle = (func, delay = 300) => {
	let prevTime = 0;
	return (...args) => {
		let currentTime = new Date().getTime();
		if (currentTime - prevTime >= delay) {
			prevTime = currentTime;
			return func(...args);
		}
	};
};

document.addEventListener("mousemove", throttle(throttleMouseMovement, 500));
