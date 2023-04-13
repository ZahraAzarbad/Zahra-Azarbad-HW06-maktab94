////////////////1//////////////////


// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250,
//     "David": 300
// };


// function topSalary(personSalary) {

//     const topSalaryName = [];

//     let topSalaryCost = 0;

//     for (const [salary] of Object.entries(personSalary)) {
//         if (salary >= topSalaryCost) {
//             topSalaryCost = salary;
//         }
//     }

//     topSalaryName.push(Object.keys(personSalary).filter(key => personSalary[key] === topSalaryCost));

//     return topSalaryName;
// }


// const result = topSalary(salaries);
// console.log(result);



////////////////////2////////////////////////

// function sortMachine() {
//     const sortList = [];
//     [...arguments].forEach((array) => {
//         sortList.push(...array)
//     })
//     return sortList.sort((first, second) => {
//         return second - first;
//     });
// }

// console.log(...sortMachine([2, 3, 4], [1, 2, 15], [0, 58, 123]));



//////////////////////////////3////////////////////////////////////



// const array = ["Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", , , 2, 2, false, false];

// function unique(arr) {
//     return new Set(arr)
// }

// console.log(unique(array));


//////////////////////////4/////////////////////////////////////



// const array = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// const anagrams = [];

// // anagrams.push(

// array.forEach(word => {
//     const sortedKey = [...word].map(lowerCaseWord => lowerCaseWord.toLowerCase()).sort().join("")
//     anagrams[sortedKey] = word
// });


// console.log(Object.values(anagrams))




//////////////////////////////////////////5///////////////////////////////

// let map = new Map();
// map.set("name", "John");

// let keys = Array.from(map.keys());
// keys.push("more");


