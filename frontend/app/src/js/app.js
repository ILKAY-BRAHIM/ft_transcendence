import  Nav from './component/Nav.js';
import { navigatTo } from './services/route.js';
import { attachSVGLoadEventListeners } from './component/Nav.js';
import { creatHeader } from './component/header.js';

import Profile from './template/profile.js';
import Home from './template/home.js';
// import Home from './template/home.js';
// import Profile from './template/profile.js';


function renderComponent(component) {
    const root = document.getElementById('nav-container');
    root.innerHTML = '';
    root.appendChild(component);
    attachSVGLoadEventListeners();
};


document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    renderComponent(Nav());
    header.append(creatHeader());
    
});

document.addEventListener("click", (e) => {
    const { target } = e;
    if (target.matches("a")) {
        e.preventDefault();
        navigatTo(e);
    }
});


