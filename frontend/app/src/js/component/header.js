import { icons} from './icons.js';
import { searchBar } from './searchBar.js';
import { createIcon } from './icons.js';

import { creatProfileInfo, creatProfileInstance, creatProfileImage} from './profile.js';
import { creatButton } from './button.js';

export const creatHeader = () => {
    const nav = document.createElement('div');
    nav.setAttribute('class', 'header');
    nav.appendChild(searchBar());
    nav.appendChild(headerNotification());

    const img = creatProfileImage("gold-profile-img", "img-sm");
    const info = creatProfileInfo();
    const button = creatButton('false');
    nav.appendChild(creatProfileInstance(img, info, button, 'col', 'profile-card-sm'));
    return nav;
};

export const creatDiv = (className, child) => {
    const element = document.createElement('div');
    element.setAttribute('class', className);
    if (child instanceof Node) {
        element.appendChild(child);
    }
    return element;
}

const headerNotification = () => {
    const notification = creatDiv('notification');

    const box = creatDiv('coin box');
    box.appendChild(createIcon(icons.Home, ''));
    const coinNumber = document.createElement('p');
    coinNumber.innerHTML = '15K';

    box.appendChild(coinNumber);
    notification.appendChild(box);
    notification.appendChild(creatDiv('box', createIcon(icons.Home, '')));
    notification.appendChild(creatDiv('box', createIcon(icons.Home, '')));
    

    return notification;
}