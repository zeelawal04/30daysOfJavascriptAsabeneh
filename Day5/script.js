//Declare an empty array;
//let arr =  Array();
const arr = [];
console.log(arr);

//Declare an array with more than 5 number of elements
const num = [1, 2, 3, 4, 8, 9, 8, 7, 9];
console.log(num);

//Find the length of your array
console.log(num.length);

//Get the first item, the middle item and the last item of the array
const numb = [1, 2, 3, 4, 8, 9, 8, 7, 9];
let firstNumber = numb[0];
console.log(firstNumber);

let middleNumber = numb[4];
console.log(middleNumber);

let lastNumber = numb[8];
console.log(lastNumber);

//Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const data = [2, "7", 8, "aishat", true, {}, false];
console.log(data.length);

//Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const companies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
//Print the array using console.log()
console.log(companies);

//Print the number of companies in the array
//console.log=

//Print the first company, middle and last company
let firstCompany = companies[0];
console.log(firstCompany);

let middleCompany = companies[3];
console.log(middleCompany);

let lastCompany = companies[6];
console.log(lastCompany);

//Print out each company
let oneCompany = companies[0];
console.log(oneCompany);

let twoCompany = companies[1];
console.log(twoCompany);

let threeCompany = companies[2];
console.log(threeCompany);

let fourCompany = companies[3];
console.log(fourCompany);

let fiveCompany = companies[4];
console.log(fourCompany);

let sixCompany = companies[5];
console.log(sixCompany);

let sevenCompany = companies[6];
console.log(sevenCompany);

//Change each company name to uppercase one by one and print them out
console.log(oneCompany.toUpperCase());
console.log(twoCompany.toUpperCase());
console.log(threeCompany.toUpperCase());
console.log(fourCompany.toUpperCase());
console.log(fiveCompany.toUpperCase());
console.log(sixCompany.toUpperCase());
console.log(sevenCompany.toUpperCase());

//??Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,racle and Amazon are big IT companies.
const sentence = ["Facebook, Google, Microsoft, Apple, IBM, racle,Amazon"];
const sent = ["are big IT companies"];
const sente = sentence.concat(sent);
console.log(sente);

//Check if a certain company exists in the Companies array. If it exist return the company else return a company is not found
const techcom = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
let index = techcom.indexOf("Apple");
console.log(index);
if (index === -1) {
  console.log("company not found in array");
} else {
  console.log("company found in array");
}

//Filter out companies which have more than one 'o' without the filter method

//Sort the array using sort() method
techcom.sort();
console.log(techcom);
//Reverse the array using reverse() method
techcom.reverse();
console.log(techcom);
//Slice out the first 3 companies from the array
const techcoms = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
console.log(techcoms.slice(3));
//Slice out the last 3 companies from the array
console.log(techcoms.slice(4));

//Slice out the middle IT company or companies from the array
console.log(techcoms.slice(3, 4));
//Remove the first IT company from the array
techcoms.shift();
console.log(techcoms);
//Remove the middle IT company or companies from the array
techcoms.shift(4);
//Remove the last IT company from the array
techcoms.pop();
console.log(techcoms);
//Remove all IT companies
techcoms.pop();
console.log(techcoms);
