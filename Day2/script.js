/*Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.*/
let challenge = "30 Days Of JavaScript";

//Print the string on the browser console using console.log()
console.log(challenge);

//Print the length of the string on the browser console using console.log()
console.log("challenge".length);

//Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase());

/*Change all the string characters to lowercase letters using toLowerCase() method*/
console.log(challenge.toLowerCase());

/*Cut (slice) out the first word of the string using substr() or substring() method*/
console.log(challenge.substr(0, 2));

//Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.substr(3));

//Check if the string contains a word Script using includes() method
console.log(challenge.includes("Script"));

//Split the string into an array using split() method
console.log(challenge.split(""));

/*Split the string 30 Days Of JavaScript at the space using split() method*/
console.log(challenge.split(" "));

/*'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.*/
let companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(companies.split(","));

//Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace("JavaScript", "Python"));

/*What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.*/
console.log(challenge.charAt(15));

/*What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()*/
console.log(challenge.charCodeAt(11));

/*Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript*/
console.log(challenge.indexOf("a"));

/*Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.*/
console.log(challenge.lastIndexOf("a"));

/*Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'*/
let Sentence =
  "You cannot end a sentence with because because because is a conjunction";
console.log(Sentence.indexOf("because"));

/*Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'*/
console.log(Sentence.lastIndexOf("because"));

/*Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'*/
console.log(Sentence.search("because"));

/*Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.*/
console.log(" 30 Days Of JavaScript ".trim());

/*Use startsWith() method with the string 30 Days Of JavaScript and make the result true*/
console.log(challenge.startsWith("3"));

/*Use endsWith() method with the string 30 Days Of JavaScript and make the result true
 */
console.log(challenge.endsWith("pt"));

//Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(challenge.match("a"));

/*Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'*/
console.log("30 days of".concat(" JavaScript"));

//Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2));

//LEVEL 2,EXERCISE 2

//Using console.log() print out the following statement:
/*The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
Using console.log() print out the following quote by Mother Teresa:*/

let quote =
  "'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.";

console.log(quote);

//Using console.log() print out the following statement:
/*"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."*/

//no2
quote =
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";

console.log(quote);

//Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
//no3
let number = 10;
let string = "10";
console.log(parseInt(string) === number);

/*Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.*/
//no4
let num = parseFloat("9.8");
console.log(Math.round(num));

//Check if 'on' is found in both python and jargon
//no5
let py = "python";
let jr = "jargon";
console.log(py.includes("on") && jr.includes("on"));

//I hope this course is not full of jargon. Check if jargon is in the sentence.
//no6
let word = "I hope this course is not full of jargon";
console.log(word.includes("jargon"));

//Generate a random number between 0 and 100 inclusively.
//n07
let numb = Math.floor(Math.random() * 101);
console.log(numb);

//Generate a random number between 50 and 100 inclusively.
//n08
numb = Math.floor(Math.random() * 51) + 50;
console.log(numb);

//Generate a random number between 0 and 255 inclusively.
//n09
numb = Math.floor(Math.random() * 256);
console.log(numb);

//Access the 'JavaScript' string characters using a random number.
//no10
let n = Math.floor(Math.random() * 10);
console.log("JavaScript".charAt(n));

/*Use console.log() and escape characters to print the following pattern.
1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125*/
//no11
let numbers = "1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125";
console.log(numbers);

/*Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'*/
//no12
let eng =
  "You cannot end a sentence with because because because is a conjunction";
console.log(eng.substr(31, 23));

//level 3
/*'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence*/
//no1
let strin =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
console.log(strin.toLowerCase().match(/love/g).length);

/*Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'*/
let sent =
  "You cannot end a sentence with because because because is a conjunction";
console.log(sent.match("because"));
