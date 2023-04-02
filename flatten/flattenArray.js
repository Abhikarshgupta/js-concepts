console.log("hello world");
import { arrayList } from "./constants.js";

(function () {
	for (let i = 1; i <= arrayList.length; i++) {
		const currentLabel = document.getElementById(`arraylabel${i}`);
		if (currentLabel) {
			currentLabel.innerHTML = `${
				arrayList[`${i - 1}`][`${`arraylabel${i}`}`]
			}`;
		}
	}
})();

const flat = (inputArray, depth = 1) => {
	const result = [];
	if (depth == 0) {
		return inputArray;
	}
	inputArray.forEach((element) => {
		if (Array.isArray(element)) {
			result.push(...flat(element, depth - 1));
		} else {
			result.push(element);
		}
	});
	return result;
};

const handleFlattenArray = () => {
	let currentSelectedArray;
	for (let i = 1; i <= arrayList.length; i++) {
		const radioEl = document.getElementById(`array${i}`);
		if (radioEl.checked) {
			currentSelectedArray = radioEl.value;
		}
	}
	if (currentSelectedArray) {
		const arrayToFlatten = arrayList.find(
			(array) => currentSelectedArray in array
		)[currentSelectedArray];

		const parsedArray = JSON.parse(arrayToFlatten);
		let flattenedArray;
		const depthEl = document.getElementById("depthInput");
		if (depthEl.value > 0) {
			flattenedArray = flat(parsedArray, depthEl.value);
			const stringifiedArray = JSON.stringify(flattenedArray);
			document.getElementById("outputList").innerHTML = stringifiedArray;
		} else {
			document.getElementById("outputList").innerHTML =
				"Please select a depth greater than 0";
			document.getElementById("outputList").style.color = "red";
		}
	}
};

window.handleFlattenArray = handleFlattenArray;
