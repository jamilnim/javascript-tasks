/* Task 15
Define an array named `employees`, where each employee has `name`, `position`, and `salary`.
Write a function that calculates the total salary of all employees in the company.
*/

// Your code here

const employees = [
    { name: "Jamil", position: "Software Engineer", salary: 85000 },
    { name: "Sumon", position: "Project Manager", salary: 95000 },
    { name: "Kishor", position: "UI/UX Designer", salary: 78000 },
    { name: "Babu", position: "Data Analyst", salary: 72000 },
    { name: "Chabi", position: "HR Manager", salary: 80000 }
];

function totalSalary(){
    let sumOfSalary=0
    employees.forEach(employee=>{sumOfSalary=sumOfSalary+=employee.salary})
    console.log(`total salary :${sumOfSalary}`)
}

totalSalary()

