import { creatProfileInfo, creatProfileInstance, creatProfileImage} from '../component/profile.js';
import { creatButton } from '../component/button.js';


export default function Profile() {
    const element = document.createElement('div');
    element.setAttribute('class', 'profile-body');

    const leftBox = document.createElement('div');
    leftBox.setAttribute('class', 'left');

    const img = creatProfileImage();
    const info = creatProfileInfo();
    const button = creatButton('true');
    leftBox.appendChild(creatProfileInstance(img, info, button, 'col', 'profile-card-md'));


    const rightBox = document.createElement('div');
    rightBox.setAttribute('class', 'right');
    return element;
}
