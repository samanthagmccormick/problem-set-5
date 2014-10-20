
// Alphabet Soup

// SHORTCUT WAY
var alphabetSoup = function(str) {
	var splitUp = str.split("");

	var reversed = splitUp.reverse();

	return reversed;
};

console.log( alphabetSoup("hello") );

// Or.....

// Long way!
var alphabetSoup = function(str) {
	var array = [];
	var splitUp = str.split("");
	console.log(splitUp);

	for (var i = splitUp.length - 1; i >= 0 ; i--) {
		console.log(splitUp[i]);
		array.push(splitUp[i]);
	}

	array = array.join("");

	return array;
};

console.log( alphabetSoup("hello") );

// Vowelcount

var vowelCount = function(str) {
	var vowels = "aeiouy";
	var numvowels = 0;

	str = str.toLowerCase();

	for (var i = 0; i < str.length; i++) {
		for (var z = 0; z < vowels.length; z++) {
			if (str[i] === vowels[z]) {
				numvowels++;
			}
		}
	}

	return numvowels;
};

console.log( vowelCount("hello") );
console.log( vowelCount("All cows eat grass") );













