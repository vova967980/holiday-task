'use strict';

function createEmployeeFullName(employee) {
    const personFullName = document.createElement('h4');
    personFullName.innerText = employee.fullName || '';
    return personFullName;
}

function createEmployeeRole(employee) {
    const personRole = document.createElement('h5');
    personRole.innerText = employee.role || '';
    return personRole;
}

function createEmployeeDescription(employee) {
    const personText = document.createElement('p');
    personText.innerText = employee.personText || '';
    return personText;
}

export default function createEmployeeTextContent(employee) {
    const personContentContainer = document.createElement('div');
    personContentContainer.classList.add('personContent');

    personContentContainer.appendChild(createEmployeeFullName(employee));
    personContentContainer.appendChild(createEmployeeRole(employee));
    personContentContainer.appendChild(createEmployeeDescription(employee));
    return personContentContainer;
}