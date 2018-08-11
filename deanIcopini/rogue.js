document.addEventListener('DOMContentLoaded', function() {


	var text = 'hello there!';

	var ourTitle = document.querySelector('h1');
	var originalText = ourTitle.innerText;
	ourTitle.innerText = 'new text';
	console.log('The original text was: ' + originalText);


	ourTitle.addEventListener('click', function() {
		ourTitle.innerText = originalText;
	});


// string
var testString = "This is a string";
var testNumber = 30;
var testBoolean = true;
var testBooleanFalse = false;

function add(notLetterA, notLetterB) {
	var result = notLetterA + notLetterB;
	return result;
}

function multiply(numberA, numberB) {
	var result = numberA * numberB;
	return result;
}

function doTheThing(firstNumber, secondNumber) {
	var result = add(10, multiply(firstNumber, secondNumber));
	return result;
}

function subtract(minusA, minusB) {
	var result = minusA - minusB;
	return result;
}

function divide(divA, divB) {
    var result = divA / divB;
    return result;
}

var x = multiply(10, 5);
console.log('x: ' + x);

var y = multiply(6, 8);
console.log('y: ' + y);

var z = add(3, 2);
console.log('z: ' + z);

var biggerResult = doTheThing(5, 3);
console.log('biggerResult: ' + biggerResult);

var w = subtract(37, 32);
console.log('w: ' + w);

var v = divide(16, 4);
console.log('v: ' + v);

});
