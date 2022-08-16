//level 1
/*Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.*/

let yourAge = prompt("Enter your age");
let ageDiff = 18 - yourAge;
if (yourAge >= 18) {
  alert("you are old enough to drive");
} else {
  alert(` wait for ${ageDiff} years`);
}
//Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
yourAge = prompt("Enter age value");
console.log(yourAge);
let myAge = 30;
ageDiff = yourAge - myAge;
if (myAge > yourAge) {
  console.log("I am older than you");
} else {
  console.log(` You are ${ageDiff} years older than me `);
}

//If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
//using if else
//ternary operator.
let a = 4;
let b = 3;
//using if else
if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("a is less than b");
}

//ternery operator
a > b ? console.log("a is greater than b") : console.log("a is less than b");

//Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

let n = prompt("Enter a number");
if (n % 2 == 1) {
  alert(`${n} is odd`);
} else {
  alert(`${n} is even`);
}

//Exercise 2
//Write a code which can give grades to students according to theirs scores:
//80-100, A
//70-89, B
//60-69, C
//50-59, D
//0-49, F
let grade = prompt("enter your grade");

if (grade > 79 && grade < 101) {
  console.log("student got A");
} else if (grade > 69 && grade < 80) {
  console.log("student got B");
} else if (grade > 59 && grade < 70) {
  console.log("student got C");
} else if (grade < 49 && grade > 60) {
  console.log("student got D");
} else {
  console.log("grade is F");
}

/*Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer*/

let month = prompt("Enter your month");
switch (month) {
  case "january":
  case "febuary":
  case "december":
    console.log("winter");
    break;
  case "september":
  case "october":
  case "november":
    console.log("autumn");
    break;
  case "march":
  case "april":
  case "may":
    console.log("spring");
    break;
  case "june":
  case "july":
  case "august":
    console.log("summer");
}

/*Check if a day is weekend day or a working day. Your script will take day as an input.
What is the day  today? Saturday
Saturday is a weekend.

What is the day today? saturDaY
Saturday is a weekend.

What is the day today? Friday
Friday is a working day.

What is the day today? FrIDAy
Friday is a working day.*/

let day = prompt("Enter your day");
if (day == "saturday" || day == "sunday") {
  console.log(`${day}is a weekend`);
} else {
  console.log(`${day} is a working day`);
}
