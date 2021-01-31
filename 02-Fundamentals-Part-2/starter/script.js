'use strick';
/*
 'use strick';`

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = truemk;
if (hasDriversLicense) console.log("I can drive.");
*/

/*
function logger() {
  console.log("My name is Mehtab.");
}

//calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const applejuice = fruitProcessor(5, 0);
console.log(applejuice);
//console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// anaother way to calculate bmi using function
function bmiMark(massMark, heightMark) {
  const bmi = massMark / heightMark ** 2;
  return bmi;
}

const bmiOfMark = bmiMark(95, 1.88);
console.log(`bmi of mark is ${bmiOfMark}`);


//function declaration

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);

//function expression

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}

const age2 = calcAge2(1991);

console.log(age1, age2);

// Arrow function

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsuntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsuntilRetirement(1991, "Mehtab"));
console.log(yearsuntilRetirement(1980, "Jonas"));

const yearsGraduate = whichSem => 4 - whichSem;
const toGraduate = yearsGraduate(3);
console.log(toGraduate);


function cutFruitPieces(fruit) {
  return fruit * 4;
}


function fruitProcessor(apples, oranges) {

  const applePieces = cutFruitPieces(apples);
  const orangesPieces = cutFruitPieces(oranges);


  const juice = `Juice with ${applePieces} pieces of apple and ${orangesPieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));


const calcAge = function (birthYear) {
  return 2037 - birthYear;
}

const yearsuntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired.`);
    return -1;
  }
}
yearsuntilRetirement(1991, "Mehtab");
yearsuntilRetirement(1970, "Jonas");

*/

// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀


const calcAverage = (score1, score2, score3,) => (score1 + score2 + score3) / 3;

let scoreDolphins = calcAverage(65, 54, 49);
let scorekoalas = calcAverage(23, 53, 27);
console.log(scorekoalas, scoreDolphins);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win ${avgDolphins} vs. ${avgKoalas}`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins}`);
  } else {
    console.log('No team wins...');
  }
}

checkWinner(scoreDolphins, scorekoalas);

const friend1 = "Michael";
const friend2 = "steven";

const friend = ['Michael', 'steven', 'Peter'];
console.log(friend);

const year = new Array(1991, 1984, 2008, 2020);
console.log(year);

console.log(friend[0]);
console.log(friend[2]);

console.log(friend.length);
console.log(friend[friend.length - 1]);

friend[2] = 'Jay';
console.log(friend);
//friend = ['Bob', 'Alice'];

const firstName = 'Mehtab';
const jonas = [firstName, "khan", 2037 - 1991, "student", friend];
console.log(jonas);

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
}

const years = [1991, 1984, 2008, 2020];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


const friend = ['Michael', 'steven', 'Peter'];
//add elements
const newLength = friend.push("Jay");
console.log(friend);
console.log(newLength);

friend.unshift("John");
console.log(friend);

//Remove elements
friend.pop(); //Last
const popped = friend.pop();
console.log(popped);
console.log(friend);

friend.shift(); //First
console.log(friend);

console.log(friend.indexOf("steven"));
console.log(friend.indexOf("Bob"));

// es6 method of array

friend.push(23);
console.log(friend.includes(("steven")));
console.log(friend.includes(("Bob")));
console.log(friend.includes(("23")));
console.log(friend.includes((23)));

console.log(friend);
if (friend.includes('steven')) {
  console.log(("you have a friend called steven"));
}

*/

///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀


//const bill = 275;
//const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

//const calcTip = function (bill) {
//  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//}
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

function calcTip(bill) {
  if (bill >= 50 && bill <= 300) {
    const tip = bill * 0.15;
    return tip;
  } else {
    const tip = bill * 0.20;
    return tip;
  }
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);


//Objects

const mehtab = {
  firstName: 'mehtab',
  lastName: 'khan',
  age: 2037 - 1991,
  job: 'student',
  friends: ['Micheal', 'Peter', 'Steven']
};

const mehtab = {
  firstName: 'mehtab',
  lastName: 'khan',
  age: 2037 - 1991,
  job: 'student',
  friends: ['Micheal', 'Peter', 'Steven']
};
console.log(mehtab);

console.log(mehtab.lastName);
console.log(mehtab['lastName']);

const nameKey = 'Name';
console.log(mehtab['first' + nameKey]);
console.log(mehtab['last' + nameKey]);


const intrestedIn = prompt("What do you want to know about mehtab? choose between firstName, lastName, age, job, friends");

if (mehtab[intrestedIn]) {
  console.log(mehtab[intrestedIn]);
} else {
  console.log("Wrong request! choose between firstName, lastName, age, job, friends")
}

mehtab.location = "Mumbai";
mehtab.twitter = "@kmehtab20";
console.log(mehtab);

//Challenge
//"Mehtab has 3 friends, his best friend is called Micheal"

console.log(`${mehtab.firstName} has ${mehtab.friends.length} friends, his best friends is called ${mehtab.friends[0]} `);



const mehtab = {
  firstName: 'mehtab',
  lastName: 'khan',
  birthYear: 1991,
  job: 'student',
  friends: ['Micheal', 'Peter', 'Steven'],
  hasDriversLicense: false,

  //  calcAge: function (birthYear) {

  //    return 2037 - birthYear
  //}

  //  calcAge: function () {
  //    console.log(this);
  //  return 2037 - this.birthYear
  //}

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {

    return `${this.firstName} is a ${this.calcAge()}-years old ${this.job},and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`
  }
};

console.log(mehtab.calcAge());

console.log(mehtab.age);
console.log(mehtab.age);
console.log(mehtab.age);

// Challenge
// "Mehtab is a 46-years old student. and he has a driver's license"

console.log(mehtab.getSummary());
*/


///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/


/*
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  }
}


const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  }
}
/*
const higherBMI = function () {

  mark.calcBMI() > mark.calcBMI() ? console.log(`${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName} (${mark.BMI})`) : console.log(`${mark.fullName}'s BMI (${mark.BMI})is higher than ${john.fullName} (${john.BMI})`);
}

higherBMI();
*/

/*
console.log(mark.calcBMI(), john.calcBMI());


if (john.BMI > mark.BMI) {
  console.log(`${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName} (${mark.BMI})`);
} else if (mark.BMI > john.BMI) {
  console.log(`${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName} (${john.BMI})`);
}



// for loop

// for loop keeps running white condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}🏋️`);
}


const mehtab = [
  "Mehtab",
  "Khan",
  2037 - 1991,
  "student",
  ["Micheal", "Peter", "Steven"],
  25,
  true
];

const types = [];

for (let i = 0; i < mehtab.length; i++) {
  console.log(mehtab[i], typeof mehtab[i]);

  // Filling types array
  //  types[i] = typeof mehtab[i];

  types.push(typeof mehtab[i]);
}

console.log(types);


const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
//
console.log("--only string---");
for (let i = 0; i < mehtab.length; i++) {
  if (typeof mehtab[i] !== "string") continue;
  console.log(mehtab[i], typeof mehtab[i]);
}
console.log("--break with number--");
for (let i = 0; i < mehtab.length; i++) {
  if (typeof mehtab[i] === "number") break;
  console.log(mehtab[i], typeof mehtab[i]);
}



const mehtab = [
  "Mehtab",
  "Khan",
  2037 - 1991,
  "student",
  ["Micheal", "Peter", "Steven"],
];


// 0, 1, ..., 4
// 4, 3, ..., 9

for (let i = mehtab.length - 1; i >= 0; i--) {
  console.log(i, mehtab[i]);
}


for (let excercise = 1; excercise < 4; excercise++) {
  console.log(`---------Starting excercise ${excercise}`)

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Excersice ${excercise}Lifting weight repetition ${rep}`);
  }
}



for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}🏋️`);
}


let rep = 1;
while (rep <= 10) {
  //  console.log(`WHILE: Lifting weights repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`Loop is about to end...`);
}
*/



///////////////////////////////////////
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/


const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

//const calcTip = function (bill) {
//  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//}
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// my solution
/* 
for (let i = 0; i < bills.length; i++) {
  const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

  tips.push(calcTip(bills[i]));

  totals.push(bills[i] + tips[i]);

  console.log(`${i + 1}. Bill is ${bills[i]} and tip is ${tips[i]} and total amount is ${totals[i]}`);
}
*/

// jonas solution
// { s }
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);

  console.log(`${i + 1}. Bill is ${bills[i]} and tip is ${tips[i]} and total amount is ${totals[i]}`);
}


const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    //sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
