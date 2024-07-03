const pathBase = '/frontend/app/src/assets/icons/';

export const icons = {
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

export function createIcon(icon){
    const element = document.createElement('object');
    element.setAttribute('data', `${icon.src}`);
    element.setAttribute('type', `${icon.type}`);
    element.setAttribute('title', `${icon.title}`);
    element.setAttribute('class', 'hor-nav-icons');
    return element;
};
