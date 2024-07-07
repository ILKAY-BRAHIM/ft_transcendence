
import {creatButton} from './button.js';

const base = '/frontend/app/src/assets/images/';


export const creatProfileImage = (type, size) => {
    const profile = document.createElement('div');
    profile.setAttribute('class', `profile-image ${type} ${size}`);
    const image = document.createElement('img');
    image.setAttribute('src', `${base}squer-girl.png`); //most change with exporting from data base 
    image.setAttribute('alt', 'profile image');
    profile.appendChild(image);
    return profile;
};

export const creatProfileInfo = () => {
    const info = document.createElement('div');
    info.setAttribute('class', 'info');
    
    const nickName = document.createElement('p');
    nickName.innerHTML = "Lukyyyy"; //database

    const name = document.createElement('p');
    name.setAttribute('class', 'sub-name');

    name.innerHTML = "My name is luky"; //database

    info.appendChild(nickName);
    info.appendChild(name);

    return info;
};


// creatProfileInstance (profileImage, "infoColumn", button, getRank());

export const creatProfileInstance = (image, info, button ,infoDispaly, size) => {
    const profile = document.createElement('div');
    profile.setAttribute('class', `profile-card  ${size}`);

    const infoCard = document.createElement('div');
    infoCard.setAttribute('class' , infoDispaly);

    if (image instanceof Node) {
        profile.appendChild(image);
    }
    if (info instanceof Node) {
        infoCard.appendChild(info);
    }
    if (button instanceof Node) {
        infoCard.appendChild(button);
    }

    profile.appendChild(infoCard);

    return profile;
};

