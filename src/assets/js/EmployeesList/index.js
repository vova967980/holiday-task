import createEmployeeCard from './../EmployeeCard';

export default function(employees) {
    let container =  document.getElementById('employees');
    for (let employee of employees){
        container.appendChild(createEmployeeCard(employee));
    }
}