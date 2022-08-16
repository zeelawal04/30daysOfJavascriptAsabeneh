/*Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.*/
let firstName = "zainab";
console.log(typeof firstName); //string

let lastName = "lawal";
console.log(typeof lastName); //string

let age = 10;
console.log(typeof age); //number

let isMarried = true;
console.log(typeof isMarried); //boolean

let country;
console.log(typeof country); //undefined

let city = null;
console.log(typeof city); //object

let year;
console.log(typeof year); //undefined

//Check if type of '10' is equal to 10
let string = "10";
let num = 10;
console.log(parseInt(string) === num); //true

//Check if parseInt('9.8') is equal to 10
let numb = parseFloat("9.8");
console.log(Math.round(numb)); //10

/*Boolean value is either true or false.
Write three JavaScript statement which provide truthy value.
Write three JavaScript statement which provide falsy value.*/
let x = true;
console.log(x); //true

let y = 4 > 3;
console.log(y); //true

let a = 4 > 1;
console.log(a); //true

let z;
console.log(z); //undefined

let l = null;
console.log(l); //null

y = false;
console.log(y); //falsy

/*Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()*/
/*4 > 3
4 >= 3
4 < 3
4 <= 3
4 == 4
4 === 4
4 != 4
4 !== 4
4 != '4'
4 == '4'
4 === '4'*/

x = 4 > 3;
console.log(x); //true

x = 4 >= 3;
console.log(x); //true

x = 4 < 3;
console.log(x); //false

x = 4 <= 3;
console.log(x); //false

x = 4 == 4;
console.log(x); //true

x = 4 === 4;
console.log(x); //true

x = 4 != 4;
console.log(x); //false

x = 4 !== 4;
console.log(x); //false

x = 4 != "4";
console.log(x); //false

x = 4 == "4";
console.log(x); //true

x = 4 === "4";
console.log(x); //false

//Find the length of python and jargon and make a falsy comparison statement.
let jr = "jargon";
let py = "python";
console.log(jr.length); //6
console.log(py.length); //6
console.log("jargon".length != "python".length); //false

/*Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()*/
//4 > 3 && 10 < 12
//4 > 3 && 10 > 12
//4 > 3 || 10 < 12
//4 > 3 || 10 > 12
//!(4 > 3)
//!(4 < 3)
//!(false)
//!(4 > 3 && 10 < 12)
//!(4 > 3 && 10 > 12)
//!(4 === '4')
//There is no 'on' in both dragon and python
//Use the Date object to do the following activities

y = 4 > 3 && 10 < 12;
console.log(y); //true

y = 4 > 3 && 10 > 12;
console.log(y); //false

y = 4 > 3 || 10 < 12;
console.log(y); //true

y = 4 > 3 || 10 > 12;
console.log(y); //true

y = !(4 > 3);
console.log(y); //false

y = !(4 < 3);
console.log(y); //true

y = !false;
console.log(y); //true

y = !(4 > 3 && 10 < 12); //false
console.log(y);

y = !(4 > 3 && 10 > 12);
console.log(y); //true

y = !(4 === "4");
console.log(y); //true

y = "python" && "dragon";
console.log("python".includes("on") && !"dragon".includes("on")); //false

//What is the year today?
//What is the month today as a number?
//What is the date today?
//What is the day today as a number?
//What is the hours now?
//What is the minutes now?
//Find out the numbers of seconds elapsed from January 1, 1970 to now.

let now = new Date();
console.log(now.getFullYear()); //2022

now = new Date();
console.log(now.getMonth()); //7

now = new Date();
console.log(now.getDate()); //12

now = new Date();
console.log(now.getDay()); //5

now = new Date();
console.log(now.getHours()); //5

now = new Date();
console.log(now.getMinutes()); //10

now = new Date();
console.log(now.getTime()); //1660295483084

/*Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
Enter base: 20
Enter height: 10
The area of the triangle is 100*/
let base = prompt("Enter triangle base");
let height = prompt("enter triangle height");
let area = 0.5 * base * height;
alert(area);

/*Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
Enter side a: 5
Enter side b: 4
Enter side c: 3
The perimeter of the triangle is 12*/
a = prompt("Enter side a");
let b = prompt("Enter side b");
let c = prompt("Enter side c");
let perimeter = parseInt(a) + parseInt(b) + parseInt(c);
alert(perimeter);

/*Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width)*/
let length = prompt("length");
let width = prompt("width");
area_rectangle = length * width;
perimeter = 2 * (parseInt(length) + parseInt(width));
alert(perimeter);
alert(area_rectangle);

/*Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.*/
const pi = 3.14;
let radius = prompt(radius);
area = pi * r * r;
let circumference = 2 * pi * r;
alert(area);
alert(circumference);

//Calculate the slope, x-intercept and y-intercept of y = 2x -2
x = prompt("Enter value for x");
y = 2 * x - 2;
alert(`the slope is ${y}`);

/*Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)*/
let m = 10 - 2 / (6 - 2);
alert(m);
//Compare the slope of above two questions.
console.log(y == m);
/*Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.*/
x = prompt("Enter value for x");
y = x * x * 6 * x + 9;
console.log(y);

/*Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
Enter hours: 40
Enter rate per hour: 28
Your weekly earning is 1120*/

let hours = prompt(hours);
let rate = prompt(rate);
let earning = hours * rate;
alert(earning);

/*If the length of your name is greater than 7 say, your name is long else say your name is short.*/

let j = prompt("enter your name");
let nameLength = name.length;

/*Compare your first name length and your family name length and you should get this output.
let firstName = 'Asabeneh'
let lastName = 'Yetayeh*/
let firstNamee = "zainab";
let lastNam = "lawal";
console.log(firstNamee.length);
console.log(lastNam.length);

/*Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 250
let yourAge = 25*/

let myAge = 250;
let yourage = 25;

/*Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
Enter birth year: 1995
You are 25. You are old enough to drive
Enter birth year: 2005
You are 15. You will be allowed to drive after 3 years.*/

/*Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
Enter number of years you live: 100
You lived 3153600000 seconds.*/
let user = prompt("enter number of years");
