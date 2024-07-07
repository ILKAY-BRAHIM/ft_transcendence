import  Nav from './component/Nav.js';
import { navigatTo } from './services/route.js';
import { attachSVGLoadEventListeners } from './component/Nav.js';
import { creatHeader } from './component/header.js';
import { creatProfileInfo, creatProfileInstance } from './component/profile.js';
import { creatProfileImage } from './component/profile.js';
import { creatButton } from './component/button.js';
import { createIcon } from './component/icons.js';
import { icons } from './component/icons.js';
// import Home from './template/home.js';
// import Profile from './template/profile.js';


function renderComponent(component) {
    const root = document.getElementById('nav-container');
    root.innerHTML = '';
    root.appendChild(component);
    attachSVGLoadEventListeners();
};

const badgesCollected = () => {
    const element = document.createElement('div');
    element.setAttribute('class', 'badges-collected');

    const title = document.createElement('p');
    title.setAttribute('class', 'title');
    title.innerHTML = 'badges collected';

    const badge = document.createElement('div');
    badge.setAttribute('class', 'badges');
    badge.appendChild(createIcon(icons.Champion));
    badge.appendChild(createIcon(icons.Leaderboard));

    element.appendChild(title);
    element.appendChild(badge);

    return element;
};

const personalInfo = (iconName , titel, data) => {
    const element = document.createElement('div');
    element.setAttribute('class', 'personal-info-entity');

    const info = document.createElement('div');
    info.setAttribute('class', 'personal-info');
    info.appendChild(createIcon(iconName));
    let subTitle = document.createElement('p');
    subTitle.setAttribute('class', 'sub-title');
    subTitle.innerHTML = titel;
    info.appendChild(subTitle);

    element.appendChild(info);
    let content = document.createElement('p');
    content.setAttribute('class', 'content');
    content.innerHTML = data;
    element.appendChild(content);

    return element;
};

const personalInformations = () => {
    const element = document.createElement('div');
    element.setAttribute('class', 'personal-information');

    const title = document.createElement('p');
    title.setAttribute('class', 'title');
    title.innerHTML = 'personal information';

    const boxs = document.createElement('div');
    boxs.setAttribute('class', 'info-boxs');
    boxs.appendChild(personalInfo(icons.Profile, 'user name', 'should be fetched'));
    boxs.appendChild(personalInfo(icons.Profile, 'user name', 'should be fetched'));
    boxs.appendChild(personalInfo(icons.Profile, 'user name', 'should be fetched'));
    boxs.appendChild(personalInfo(icons.Profile, 'user name', 'should be fetched'));
    boxs.appendChild(personalInfo(icons.Profile, 'user name', 'should be fetched'));

    element.appendChild(title);
    element.appendChild(boxs);
    return element;
};

export default function ProfileTest() {
    const element = document.getElementById('page-body');
    element.setAttribute('class', 'profile-body');

    const leftBox = document.createElement('div');
    leftBox.setAttribute('class', 'left');

    const img = creatProfileImage('', 'img-md');
    const info = creatProfileInfo();
    const button = creatButton('true', 'btn-sm', 'btn-gold', 'Edit profile');
    leftBox.appendChild(creatProfileInstance(img, info, button, 'col', 'profile-card-md'));

    const middel = document.createElement('div');
    middel.setAttribute('class', 'middel');


    middel.appendChild(badgesCollected());
    middel.appendChild(personalInformations());

    leftBox.appendChild(middel);
    const rightBox = document.createElement('div');
    rightBox.setAttribute('class', 'right');

    element.appendChild(leftBox);
    element.appendChild(rightBox);
    return element;
};

document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    renderComponent(Nav());
    header.appendChild(creatHeader());
    
    
    //For test component 
    const body = document.getElementById('page-body');
    body.setAttribute('class', 'profile-body')
    body.appendChild(ProfileTest());

});

// It must reveuse it's logic [!]
document.addEventListener("click", (e) => {
    const { target } = e;
    if (target.matches("a")) {
        e.preventDefault();
        navigatTo(e);
    }
});


