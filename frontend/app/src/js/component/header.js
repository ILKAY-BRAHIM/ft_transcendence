import {creatProfileInstance} from './profile.js'

export const creatHeader = () => {
    const nav = document.createElement('div');
    nav.setAttribute('class', 'header');
    nav.appendChild(creatProfileInstance());
    return nav;
};
