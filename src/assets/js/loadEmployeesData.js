'use strict';

const loadData = async () =>{
    try {
        const response = await fetch("data/employees.json");
        const data = await response.json();

        return await data;
    }
    catch (e) {
        console.log(e);
    }
};

loadData().then(appendEmployeeItem);

/*for(let value of loadData()){
    appendEmployeeItem(value);
}*/
//==========
const iconsContacts =['fa-facebook','fa-twitter','fa-linkedin','fa-google-plus','fa-dribbble'];

function createEmployeeItem(employee) {

    const personItemContainer = document.createElement('div');
    personItemContainer.classList.add('person');


    const personImageContainer = document.createElement('div');
    personImageContainer.classList.add('personImageContainer');
    const personImage = document.createElement('img');
    personImage.src = employee.profilePicture ;
    personImage.onerror = function(){
        personImage.src = 'https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png';
    };

    const personContentContainer = document.createElement('div');
    personContentContainer.classList.add('personContent');

    const personFullName = document.createElement('h4');
    personFullName.innerText = employee.fullName || '';

    const personRole = document.createElement('h5');
    personRole.innerText = employee.role || '';

    const personText = document.createElement('p');
    personText.innerText = employee.personText || '';

    const personContactsContainer = document.createElement('ul');

    for(let i=0;i<employee.contacts.length;i++){
        const contactContainer = document.createElement('li');
        const contactLink = document.createElement('a');
        contactLink.classList.add('socialIcons');
        contactLink.href = employee.contacts[i];
        const icon = document.createElement('i');
        icon.classList.add('fab',iconsContacts[i]);

        personContactsContainer.appendChild(contactContainer);
        contactContainer.appendChild(contactLink);
        contactLink.appendChild(icon);
    }

    personImageContainer.appendChild(personImage);

    personItemContainer.appendChild(personImageContainer);
    personItemContainer.appendChild(personContentContainer);
    personItemContainer.appendChild(personContactsContainer);

    personContentContainer.appendChild(personFullName);
    personContentContainer.appendChild(personRole);
    personContentContainer.appendChild(personText);
    return personItemContainer;
}

function appendEmployeeItem(employees) {
    let container =  document.getElementById('employees');
    for (let employee of employees){
        container.appendChild(createEmployeeItem(employee));
    }
}
