import profilePicture from "../../Picture";

export default function createEmployeePicture(employee) {
    const picture = profilePicture('',employee.profilePicture, 'profile picture','/assets/images/userImage.png');
    const personImageContainer = document.createElement('div');
    personImageContainer.classList.add('personImageContainer');
    personImageContainer.appendChild(picture);
    return personImageContainer;
}