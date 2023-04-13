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

//     for (const [name, salary] of Object.entries(personSalary)) {
//         if (salary >= topSalaryCost) {
//             topSalaryCost = salary;
//         }
//     }

//     topSalaryName.push(Object.keys(personSalary).filter(key => personSalary[key] == topSalaryCost));

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
