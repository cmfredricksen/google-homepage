let greeting = function(name) {
	return `Hello ${name}! So nice to see you!`;
}

console.log(greeting('Chris'));

function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
	var key = Object.keys(source);
    for(var i = 0; i < collection.length; i++) {
        if(Object.keys(collection[i]).length >= key.length) {
            var counter = 0;
            for (var item in key) {
                if(collection[i].hasOwnProperty(key[item]) && collection[i][key[item]] === source[key[item]]) {
                    counter++;
                    if(counter === key.length) {
                        arr.push(collection[i]);
                    }
                }
            }    
        }
    }

  // Only change code above this line
  return arr;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })
);

function translatePigLatin(str) {
	let consonantRegex = /^[^aeiou]+/;
	let myConsonants = str.match(consonantRegex);
	return myConsonants !== null
		? str
			.replace(consonantRegex, '')
			.concat('ay')
		: str.concat('way');
}
console.log(translatePigLatin("elementary"));

function translatePigLatin2(str) {
	var pigLatin = '';
	var regex = /[aeiou]/gi;

	if (str[0].match(regex)) {
		pigLatin = str + 'way';
	} else if (str.match(regex) === null) {
		pigLatin = str + 'ay';
	} else {
		var vowelIndice = str.indexOf(str.match(regex)[0]);
		pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
	}
	return pigLatin;
}

console.log(translatePigLatin2('fresh')); //returns undefined


function translatePigLatin3(str) {
	if (str.match(/^[aeiou]/)) return str + 'way';
	
	const consonantCluster = str.match(/^[^aeiou]+/)[0];
	return str.substr(consonantCluster.length) + consonantCluster + 'ay';
}

console.log(translatePigLatin3('holiday'));




















