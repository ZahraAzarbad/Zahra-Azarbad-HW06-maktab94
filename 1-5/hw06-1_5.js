////////////////1//////////////////


let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250,
    "David": 300
};


function topSalary(personSalary) {

    const topSalaryName = [];

    let topSalaryCost = 0;

    for (const [name, salary] of Object.entries(personSalary)) {
        if (salary >= topSalaryCost) {
            topSalaryCost = salary;
        }
    }

    topSalaryName.push(Object.keys(personSalary).filter(key => personSalary[key] == topSalaryCost));

    return topSalaryName;
}


const result = topSalary(salaries);
console.log(result);