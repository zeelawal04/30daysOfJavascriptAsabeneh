//Declare a function fullName and it print out your full name.
function fullName() {
  let firstName = "Zainab";
  let lastName = "Lawal";
  let space = " ";
  let fullName = firstName + space + lastName;
  console.log(fullName);
}
fullName();

//Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}
console.log(fullName("zee", "lawal"));

//Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(a, b) {
  return a + b;
}
console.log(addNumbers(3, 7));

//An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
const areaOfRectangle = (l, w) => {
  let area = l * w;
  return area;
};
console.log(areaOfRectangle(10, 5));

//A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
const perimeterOfRectangle = (l, w) => {
  let perimeter = 2 * (l + w);
  return perimeter;
};
console.log(perimeterOfRectangle(5, 5));

//A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
