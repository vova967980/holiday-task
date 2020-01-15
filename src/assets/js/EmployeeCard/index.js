'use strict';
import createEmployeePicture from './EmployeePicture';
import createEmployeeTextContent from "./EmployeeTextContent";
import  createEmployeeSocialLinks from './EmployeeSocialLinks';

export default function (employee) {
    const personItemContainer = document.createElement('div');
    personItemContainer.classList.add('person');

    personItemContainer.appendChild(createEmployeePicture(employee));
    personItemContainer.appendChild(createEmployeeTextContent(employee));
    personItemContainer.appendChild(createEmployeeSocialLinks(employee));
    return personItemContainer;
}
