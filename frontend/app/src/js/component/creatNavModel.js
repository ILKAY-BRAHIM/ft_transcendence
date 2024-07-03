import {icons} from './icons.js';
import {createIcon} from './icons.js';

const navItems = [
    {name: 'Home', link: '/'},
    {name: 'Profile', link: '/profile'},
    {name: 'Message', link: '/message'},
    {name: 'Friends', link: '/friends'},
    {name: 'Leaderboard', link: '/leaderboard'},
    {name: 'Game', link: '/game'},
    {name: 'Champion', link: '/champion'},
    {name: 'Settings', link: '/settings'}
]

function createNavItem(item) {
    const navItem = document.createElement('li');
    const iconElement = createIcon(icons[item.name], 'hor-nav-icons');
    const navLink = document.createElement('a');
    navLink.setAttribute('href', `${item.link}`);
    navLink.innerHTML = `${item.name}`;
    navItem.appendChild(iconElement);
    navItem.appendChild(navLink);
    return navItem;
};

export function createNavModel() {
    const nav = document.createElement('ul');
    const logo = document.createElement('img');
    logo.setAttribute('src', `${icons.PingPong.src}`);
    logo.setAttribute('alt', 'ping-pong-logo');
    logo.setAttribute('class', 'logo');
    nav.appendChild(logo);
    navItems.map(item => {
        const navI = createNavItem(item);
        if (item === navItems[navItems.length - 1])
            navI.setAttribute('class', 'last-item');
        nav.appendChild(navI);
    })
    return nav;
};
