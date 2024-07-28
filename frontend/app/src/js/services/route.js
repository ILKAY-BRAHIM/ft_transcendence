import Home from '../template/home.js';
import Profile from '../template/profile.js';
import Message from '../template/message.js';
import Friends from '../template/friends.js';
import Leaderboard from '../template/leaderboard.js';
import Game from '../template/game/game.js';
import Champion from '../template/champion.js';
import Welcome from '../template/welcome.js';
import EditProfile from '../template/edit.js';


import Nav from '../component/Nav.js';
import { renderComponent } from '../app.js';
import { creatHeader } from '../component/header.js';
import Play from '../template/game/play.js';


const urlRoutes = {
    404: {
        component: "/src/js/template/404.js",
        title: "Page Not Found",
        description: "The requested page was not found.",
        header : "false"
    },
    "/": {
        component: Welcome,
        title: "Welcome",
        description: "Please register welcome to visite our web site.",
        header : "false"
    },
    "/home": {
        component: Home,
        title: "Home",
        description: "Welcome to the home page.",
        header : "true"
    },
    "/profile": {
        component: Profile,
        title: "Profile",
        description: "Your user profile.",
        header : "true"
    },
    "/message": {
        component: Message,
        title: "Message",
        description: "Chat with friends.",
        header : "true"
    },
    "/friends": {
        component: Friends,
        title: "Friends",
        description: "Your friends list.",
        header : "true"
    },
    "/leaderboard": {
        component: Leaderboard,
        title: "leaderboard",
        description: "leaderboard",
        header : "true"
    },
    "/game": {
        component: Game,
        title: "Game",
        description: "Play a game.",
        header : "false"
    },
    "/champion": {
        component: Champion,
        title: "champion",
        description: "Play a game.",
        header : "true"
    },
    "/edit": {
        component: EditProfile,
        title: "Edit Profile",
        description: "Edit your profile.",
        header : "true"
    },
    "/play": {
        component: Play,
        title: "Play",
        description: "Play a game.",
        header : "false"
    }
    
};

export const navigatTo = (event) => {
    event.preventDefault();
    const href = event.target.getAttribute("href");
    if (!href) return;
    window.history.pushState({}, "", href);
    urlLocationHandler();
};

export const goTo = (path) => {
    window.history.pushState({}, "", path);
    urlLocationHandler();
}

export const urlLocationHandler = async () => {
    let location = window.location.pathname;
    if (location.length === 0) {
        location = "/";
    }

    const route = urlRoutes[location] || urlRoutes[404];
    try {
        const header = document.getElementById('header');
        header.innerHTML = '';
        document.getElementById("nav-container").innerHTML = '';
        const Component = route.component;
        const componentInstance = Component();
        if (route.header === "true") {
            renderComponent(Nav());
            header.append(creatHeader());   
        }
        document.getElementById("page-body").innerHTML = '';
        document.getElementById("page-body").appendChild(componentInstance);
        document.title = route.title;

    } catch (error) {
        console.error('Failed to fetch template:', error);
        document.getElementById("page-body").innerHTML = '<p>Failed to load content. Please try again later.</p>';
        document.title = "Error";
    }
};

window.addEventListener('popstate', urlLocationHandler);