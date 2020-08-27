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
