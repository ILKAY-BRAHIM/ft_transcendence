const pathBase = '/frontend/app/src/assets/icons/';

const    icons = {
    PingPong: {
        src: `${pathBase}logo.svg`,
        type : 'image/svg+xml',
        title: 'PingPong'
    },
    Home: {
        src: `${pathBase}home.svg`,
        type : 'image/svg+xml',
        title: 'Home'
    },
    Profile: {
        src: `${pathBase}profile.svg`,
        type : 'image/svg+xml',
        title: 'Profile'
    },
    Message: {
        src: `${pathBase}message.svg`,
        type : 'image/svg+xml',
        title: 'Message'
    },
    Friends: {
        src: `${pathBase}friends.svg`,
        type : 'image/svg+xml',
        title : 'Friends'
    },
    Leaderboard: {
        src: `${pathBase}leaderboard.svg`,
        type : 'image/svg+xml',
        title: 'Leaderboard'
    },
    Game: {
        src : `${pathBase}game.svg`,
        type : 'image/svg+xml',
        title : 'Game'
    },
    Champion: {
        src : `${pathBase}champion.svg`,
        type : 'image/svg+xml',
        title : 'Champion'
    },
    Settings: {
        src : `${pathBase}settings.svg`,
        type : 'image/svg+xml',
        title : 'Settings'
    }
};

const navItems = [
    {name: 'Home', link: '/'},
    {name: 'Profile', link: '/'},
    {name: 'Message', link: '/'},
    {name: 'Friends', link: '/'},
    {name: 'Leaderboard', link: '/'},
    {name: 'Game', link: '/'},
    {name: 'Champion', link: '/'},
    {name: 'Settings', link: '/'}
]

function createIcon(icon){
    const element = document.createElement('object');
    element.setAttribute('data', `${icon.src}`);
    element.setAttribute('type', `${icon.type}`);
    element.setAttribute('title', `${icon.title}`);
    return element;
};

function createNavItem(item) {
    const navItem = document.createElement('li');
    const iconElement = createIcon(icons[item.name]);
    const navLink = document.createElement('a');
    navLink.setAttribute('href', `${item.link}`);
    navLink.innerHTML = `${item.name}`
    navItem.appendChild(iconElement);
    navItem.appendChild(navLink);
    return navItem;
};

function createNavModel() {
    const nav = document.createElement('ul');
    const logo = document.createElement('img');
    logo.setAttribute('src', `${icons.PingPong.src}`);
    logo.setAttribute('alt', 'ping-pong-logo');
    nav.appendChild(logo);
    navItems.map(item => {
        const navI = createNavItem(item);
        nav.appendChild(navI);
    })
    console.log(nav);
    return nav;
};

const app = document.getElementById('app');
app.appendChild(createNavModel());