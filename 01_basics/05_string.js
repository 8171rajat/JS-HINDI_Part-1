const name = "Rajat "
const repoCount = 50;

// console.log(name + repoCount + " value");

// console.log(`Hello my name is ${name}and my repo count is ${repoCount}`);   
// This is called stringInterpolation 

const gameName = new String('rajat-km-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('a'));

// const newString = gameName.substring(0, 4)
// console.log(newString);

const anotherString = gameName.slice(-7, 3);
console.log(anotherString);


const newStringOne = "   rajat     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://rajat.com/rajat%20kumar"

console.log(url.replace('%20', '-'));

console.log(url.includes('sundar'));

console.log(gameName.split('-'));


