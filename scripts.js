console.log("hello world")
var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";
var comparisonOperators = ["Equal", "Not Equal", "Strict Equal", "Strict Not Equal", "Greater Than", "Less Than"];
var arithmaticOperators = ["+", "-", "%"];
var logicalOperators = ["and", "or", "not", 'yeah?'];
var myString = "Hello String"


// WRITE YOUR CODE BELOW
// move the first one
constellations.unshift("Canis Major");
// console.log(constellations)

// remove the last one
planets.pop()
// console.log(planets)

var galaxy = constellations.concat(planets)
// console.log(galaxy)

// a->b
comparisonOperators.sort();

let fruits = ['banana', 'apple', 'cherry'];
fruits.sort();
// apple, banana, cherry

let numbers = [10, 2, 30];
numbers.sort(function(a, b) {
  return a - b;
});
// 2, 10, 30

//update or add to tghe last element?
arithmaticOperators.push(";)")
// console.log(arithmaticOperators);

// keep 0->3 copy 0-2 and paste
var logicalOperatorSliced = logicalOperators.slice(0,3);
// console.log(logicalOperatorSliced);

var myNewString = myString.replace("String", "World")
// console.log(myNewString)

// No.7 
// var numbers = [1, 2, 3, 4]

//Iterative Methods
numbers.forEach(lessThanThree)

function lessThanThree(i) {
  if (i < 3) {
    console.log(i.toString() + ' is less than 3');
  } else {
    console.log(i.toString() + ' is NOT less than 3');
  }
}

var numbersDoubled = numbers.map(multiply)

function multiply(i) {
 return i * 2
}

// console.log(numbersDoubled)

var originalArray = [1, 3, 2, 5, 10];

// doubledArray is equal to a new array of numbers multiplied by 2 and returned by map(). map() will use an anonymous function as a condition. 
var doubledArray = originalArray.map(function(data) {
  // The anonymous function returns each number multiplied by 2. The returned result is added to a new array.
  return data * 2;
});

// console.log(doubledArray);
// console.log(originalArray);


// TODO: Describe how map is working in the example below. What will the value of tripledArray be?
var tripledArray = originalArray.map(function(data) {
  return data * 3
});

// TODO: Describe how map is working in the example below. What will the value of oddOrEven be?
var oddOrEven = originalArray.map(function(num) {
  if (num % 2 === 0) {
    return 'even'
  } else {
    return 'odd'
  }
});
