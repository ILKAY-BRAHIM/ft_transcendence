import { icons} from './icons.js';
import {creatProfileInstance} from './profile.js'
import { searchBar } from './searchBar.js';
import { createIcon } from './icons.js';

export const creatHeader = () => {
    const nav = document.createElement('div');
    nav.setAttribute('class', 'header');
    nav.appendChild(searchBar());
    nav.appendChild(creatProfileInstance());
    nav.appendChild(headerNotification());
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
    notification.appendChild(creatDiv('box', createIcon(icons.Home, '')));
    notification.appendChild(creatDiv('box', createIcon(icons.Home, '')));
    notification.appendChild(creatDiv('box', createIcon(icons.Home, '')));

    return notification;
}