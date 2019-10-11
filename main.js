console.log("Array methods are cool")

// helpful methods to know
// reverse
let frontwards = [1,"hello",true, undefined,5]
let bwards = frontwards.reverse()

let nums = [1,2,3,4,5]
let num = nums.pop()
let otherNum = nums[3]

// join
let numstring = nums.join(' ')

// slice
let miniArr = nums.slice(1,3)

// splice
var months = ['Jan', 'March', 'April', 'June', 'July']
months.splice(1, 0, 'Feb')

// sort <- optionally takes a function as an arg
let numArr = [2,3,5,1,9,6]
let orgNums = numArr.sort()

let bigNums = [1,6,10,234,9,3]
let whatIExpected = bigNums.sort( (current, next) => {
  return current - next
})
console.log(whatIExpected, "What I expected")
var people = [
  {
    name: "Fred",
    age: 90
  },
  {
    name: "Wilma",
    age: 88
  },
  {
    name: "Fred",
    age: 4
  }
]
// Finds the first, or only, item in the array that meets the condition
let myPerson = people.find( person => person.name === "Fred")

// Find all the items in the array that meet the condition
let freds = []
people.forEach( person => {
  if (person.name === "Fred") {
    freds.push(person)
  }
})

// find <- takes a function as an arg
let smallNum = bigNums.find( num => num < 250 && num > 20 )

var people = [
  {
    name: "Fred",
    age: 90
  },
  {
    name: "Wilma",
    age: 88
  },
  {
    name: "Fred",
    age: 4
  }
]
// Creating new arrays from existing arrays. Very cool
// filter
let onlyFreds = people.filter( person => person.name === "Fred")
// The above is the same as this:
let fredsOnly = []
for( let i = 0; i < people.length; i++) {
  if (people[i].name === "Fred"){
    fredsOnly.push(people[i])
  }
}

// map: Mutate values in an array and add the new values to a new array
let doubles = numArr.map( num => num * 2)

// Create new representations of data using map. VERY helpful
var family = [
  {
    name: "Fred",
    age: 90,
    role: "uncle"
  },
  {
    name: "Wilma",
    age: 88,
    role: "grandma"
  },
  {
    name: "Scooter",
    age: 4,
    role: "cousin"
  }
]

// Cool! We can order an array based on properties of the objects it contains
let orderedFamily = family.sort( sortFunc )

function sortFunc(curr, next) {
  return curr.age - next.age
}
// gives us this:
// 0: {name: "Scooter", age: 4, role: "cousin"}
// 1: {name: "Wilma", age: 88, role: "grandma"}
// 2: {name: "Fred", age: 90, role: "uncle"}


function createFamilyComponent(personObj) {
  return `
    <p>Hello, my name is ${personObj.name}, and I am the ${personObj.role} of this family.</p>
  `
}

let familyStrings = family.map(createFamilyComponent)

let longWayFamilyStrings = []
for ( let i = 0; i < family.length; i++) {
  let stringified = createFamilyComponent(family[i])
  longWayFamilyStrings.push(stringified)
}

// Re-visit passing a function into a function
function speak(arr, func) {
  arr.forEach( item => {
    func(item)
  })
}

function pickAnimal(taco) {
  if (taco == "meow") {
    console.log(`The cat says ${taco}`)
  } else {
    console.log(`The dog says ${taco}`)
  }
}

let pets = ["woof", "bark", "meow"]

function pickPerson(foo) {
  if (foo == "Hello") {
    console.log("This person speaks English ")
  } else {
    console.log("This person doesn't speak English")
  }
}

let greetings = ["Hello", "Bonjour", "Hola"]

speak(pets, pickAnimal)
speak(greetings, pickPerson)


// combing array values into one
// reduce
let total = numArr.reduce( (current, next) => {
  return current + next
})

let str = greetings.reduce( (curr, next) => {
  return `${curr} ${next}`
})

let otherNums = [10, 7, 2]
let difference = otherNums.reduce( (curr, next) => {
  return curr - next
})

let dataArr = [
  {
    country: 'China',
    pop: 1409517397,
  },
  {
    country: 'India',
    pop: 1339180127,
  },
  {
    country: 'USA',
    pop: 324459463,
  },
  {
    country: 'Indonesia',
    pop: 263991379
  }
]

let overcrowding = dataArr.reduce( (curr, next) => {
  return curr + next.pop
}, 0)


//factorialize numbers
function factorialize(num){
  for (var i=1; i<num; i++){
    console.log("factorialize",i)
  }
}
factorialize(6)
factorialize(9)


//find longest string (long way);
function findLongestWord(str){
 let words = str.split(" ");
 let longest = "";
 for (let word of words){
   if (word.length > longest.length) longest = word;
  // console.log(word)
  }
  console.log(longest.length);
}

//find longest string short way
function findLongestWordShort(str){
  return str.split(" ").sort(function(a,b){console.log( b.length - a.length)})
}

findLongestWordShort("terry", "salliest", "sam")

findLongestWord("When it rains I feel happy")

let words = ["sampson", "time", "lime", "rhemmy", "terrisouch"]

//indexing the place of the words in this 4loop
for (var i=0; i<words.length; i++){
  console.log(words[i])
}
//jumps straight to the word list and interates through it with out worry about indexing
for (let word of words){
  console.log(word)
}

//making all word in a sentence a capital first letter
function titleCase(str) {
  let words = str.toLowerCase().split(" ");
  for (let i=0; i<words.length; i++){
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}
console.log(titleCase("I saw this whole world"));

//finding largest number in an array of array of numbers
function largestFour(arr){
  let maxes = [];
  for (let i=0; i<arr.length; i++){
    let tempMax = arr[i][0];
    for (let j=0; j<arr[i].length; j++){
      let currentElement = arr[i][j];
      if (currentElement >= tempMax){
        tempMax = currentElement;
      }
    }
    maxes.push(tempMax);
  }
  return maxes;
}
console.log("largest",largestFour([[4,22,55,6],[33,66,24,456],[23,77,2,5],[4,77,3645,345]]))

//confirm ending in string--short version
function confirmEnding(str, target){
  return str.endsWith(target);
}
console.log(confirmEnding("Tennessee", "e"))


function fizzBuss(num4){
  for(let i = 1; i<=num4; i++){
    if ( i % 3 === 0 && i % 5 === 0){
      console.log("FizBuz");
    }
    if ( i % 3 === 0){
      console.log("fizz");
    }
    if ( i % 5 === 0){
      console.log("Buzz");
    }
    else{
      console.log("the rest are", [i]);
    }
  }
}
let num1 = 100

fizzBuss(num1)

for (var i=1; i <= 20; i++)
{
    if (i % 15 == 0)
        console.log("FizzBuzz");
    else if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else
        console.log(i);
}

//reversing a string
