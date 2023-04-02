const textareaInput = document.getElementById("listInput");

const handleListTextInput = () => {
	const listInputDiv = document.getElementById("listInput");
	let inputString = "";
	return (e) => {
		if (e.keyCode === 13) {
			if (e.shiftKey) {
				const outDiv = document.getElementById("sampleOut");
				outDiv.innerText = inputString;
				e.stopPropogation();
				return;
			}
		}
		inputString += e.key;
		inputString += "&emsp";
		listInputDiv.setAttribute("data-value", inputString);
	};
};
textareaInput.addEventListener("keyup", handleListTextInput());
console.log("hi");

const handleGenereateListBtnClick = () => {
	console.log("clicked");
	const listData = document.getElementById("listInput");
	console.log(listData.getAttribute("data-value"));
	localStorage.setItem("country", "india");
};
