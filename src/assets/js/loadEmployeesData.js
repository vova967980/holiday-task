const loadData = async function(){
    try {
        const response = await fetch("data/employees.json");
        const data = await response.json();
        for (let i = 0; i < data.length; i++){
            appendEmployeeItem(data[i]);
        }
    }
    catch (e) {
        console.log(e);
    }
};

loadData();

const iconsContacts =['fa-facebook','fa-twitter','fa-linkedin','fa-google-plus','fa-dribbble'];

function createEmployeeItem(employee) {
    const personItemContainer = document.createElement('div');
    personItemContainer.classList.add('person');

    const personImage = document.createElement('img');
    personImage.src = employee.profilePicture;

    const personContentContainer = document.createElement('div');
    personContentContainer.classList.add('personContent');

    const personFullName = document.createElement('h4');
    personFullName.innerText = employee.fullName;

    const personRole = document.createElement('h5');
    personRole.innerText = employee.role;

    const personText = document.createElement('p');
    personText.innerText = "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam quis risus eget urna mollis ornare vel eu leo.";

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

    personItemContainer.appendChild(personImage);
    personItemContainer.appendChild(personContentContainer);
    personItemContainer.appendChild(personContactsContainer);

    personContentContainer.appendChild(personFullName);
    personContentContainer.appendChild(personRole);
    personContentContainer.appendChild(personText);
    return personItemContainer;
}

function appendEmployeeItem(employee) {
    document.getElementById('employees').appendChild(createEmployeeItem(employee));
}
