/**
let js = "amazing";

console.log(40 + 8 + 23 - 10);

console.log("Kmehtab");


// math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas , ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Mehtab';
const lastName = 'Khan';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; //15
x += 10;  //x = x+10 = 25
x *= 4; // x = x * 4 = 100
x ++ ;
x -- ;
x -- ;
console.log(x);

// Comparision operators
console.log(ageJonas < ageSarah);
console.log(ageSarah >= 18);

const isFullage = ageSarah >= 18;

console.log(now - 1991 > now - 2018);



const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25-10-5; //x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

*/

///**** Coding Challenge #1 ****

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.

Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK



// let weightOfMark = 78; //in kg
// let heightOfMark = 1.69; //in meter
// let weightOfJohn = 92;
// let HeightOfJohn = 1.95;


let weightOfMark = 95; //in kg
let heightOfMark = 1.88; //in meter
let weightOfJohn = 85;
let HeightOfJohn = 1.76;

const bmiOfMark = weightOfMark / heightOfMark **2;
const bmiOfJohn = weightOfJohn / HeightOfJohn **2;
const markHigherBMI = bmiOfMark > bmiOfJohn;

console.log(bmiOfJohn, bmiOfMark, markHigherBMI)


const firstName = 'Mehtab';
const job = 'student';
const birthYear = 1998;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String with
multiple
lines`);


const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log("Sarah can start driving licence 🚗")
}else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;
let century;

if(birthYear <= 2000){
    century = 20;
}else{
    century = 21;
}
console.log(century);

/////Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement �
GOOD LUCK �



let weightOfMark = 78; //in kg
let heightOfMark = 1.69; //in meter
let weightOfJohn = 92;
let HeightOfJohn = 1.95;


// let weightOfMark = 95; //in kg
// let heightOfMark = 1.88; //in meter
// let weightOfJohn = 85;
// let HeightOfJohn = 1.76;

const bmiOfMark = weightOfMark / heightOfMark **2;
const bmiOfJohn = weightOfJohn / HeightOfJohn **2;
console.log(bmiOfJohn, bmiOfMark);

if (bmiOfMark > bmiOfJohn) {
    console.log("Mark's BMI is higher than John's!");
} else {
    console.log("John's BMI is higher than Mark's!");
}

if (bmiOfMark > bmiOfJohn) {
    console.log(`Marks BMI (${bmiOfJohn}) is higher than John's (${bmiOfMark}) !`);
} else {
    console.log(`John's BMI (${bmiOfJohn}) is higher than Mark's (${bmiOfMark}) !`);
}



///type conversion
const inputYear = '1991';
console.log(Number(inputYear));
console.log(inputYear + 19);
console.log(Number('Jinas'));
console.log(typeof NaN);

console.log(String(23), 23);


// type coercion
console.log('I am ' + 23 + ' years old')
console.log('I am 23 years old');
console.log('23' - '10' - 3);
console.log('23' > '18');

let n = '1' + 1;
n = n - 1;
console.log(n);


// 5 falsy vales: 0, '', undefined, null, NaN

console.log((Boolean(0)));
console.log(Boolean(undefined));
console.log((Boolean('Jonas')));
console.log((Boolean({})));
console.log((Boolean('')));

const money = 1000;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

let height = 12;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}


const age = "18";
if (age === 18) console.log("You just became an adult. (strick)");

if (age == 18) console.log("You just became an adult. (loose)");

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { //
  console.log(`Cool! ${favourite} is an amazing number!`);
} else if (favourite === 7) {
  console.log(`Cool! ${favourite} is an amazing number!`);
} else {
  console.log('Number is not 23 or 7');
}

if (favourite !== 23) console.log("Why not 23");


const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive) {
console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}

const isTired = true;
console.log(hasDriversLicense && hasGoodVision && isTired);


///Coding Challenge #3


There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team,using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
GOOD LUCK 😀


const scoreDolphins = ((96 + 108 + 89) / 3);
const scoreKoalas = ((88 + 91 + 110) / 3);
console.log(scoreKoalas, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
  console.log(`Dolphins won the trophy with ${scoreDolphins} score.`);
} else if (scoreKoalas > scoreDolphins) {
  console.log(`Koalas won the trophy with ${scoreKoalas} score.`);
} else if (scoreKoalas === scoreDolphins) {
  console.log("This is a draw.");
}



const day = "tuesday";

switch (day) {
  case "monday":
    console.log("Plan course sructure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code example");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
}

if (day === "friday") {
  console.log("Plan course sructure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code example");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Not a valid day!");
}



const age = 23;
age >= 18 ? console.log("I like to drink cola.") :
  console.log("I like to drink water.");

const drink = age >= 18 ? "cola" : "water";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "cola";
} else {
  drink2 = "water";
}
console.log(`I like to drink ${age >= 1 ? "cola" : "water"}`);
*/


////////////////////////////////////
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/


const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
console.log(`The bill value is ${bill}, and tip is ${tip} and the total value is ${bill + tip},`);



