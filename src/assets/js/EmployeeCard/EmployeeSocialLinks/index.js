import socialIcon from "../../SocialIcon";

export default function createEmployeeSocialLinks(employee) {
    const personContactsContainer = document.createElement('ul');
    for(let link of employee.contacts){
        personContactsContainer.appendChild(socialIcon(link));
    }
    return personContactsContainer;
}