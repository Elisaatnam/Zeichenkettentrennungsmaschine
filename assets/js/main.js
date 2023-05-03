function makeSound() {
	const chainsawSound = new Audio((src = "../../ChainSaw.mp3"));
	chainsawSound.play();
}

const outputBefore = document.querySelector(".output-before");
const outputAfter = document.querySelector(".output-after");

function cut() {
	const textInput = document.querySelector("#sentence").value + " ";
	console.log(textInput);
	const cutWord = document.querySelector("#cut-word").value;
	const before = document.querySelector("#cut-before").checked;
	let index = textInput.indexOf(cutWord);
	let laenge = cutWord.length;
	console.log(laenge);

	if (textInput.includes(cutWord) == true) {
		if (before == true) {
			outputBefore.innerHTML = textInput.slice(0, index);
			outputAfter.innerHTML = textInput.slice(index, -1);
		} else {
			outputBefore.innerHTML = textInput.slice(0, index + laenge);
			outputAfter.innerHTML = textInput.slice(index + laenge, -1);
		}
	} else if (textInput.includes(cutWord) == false) {
		outputBefore.innerHTML = "Ich kann das Zeichen leider nicht finden!";
		outputAfter.innerHTML = textInput;
	}
}

function playSoundAndCut() {
	makeSound();
	cut();
	return false;
}
