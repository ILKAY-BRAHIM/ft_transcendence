import  Nav from './component/Nav.js';
import { navigatTo } from './services/route.js';
import { attachSVGLoadEventListeners } from './component/Nav.js';
import { creatHeader } from './component/header.js';

import ProfileTest from './template/profile.js';
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
    header.appendChild(creatHeader());
    
    
    //For test component 
    const body = document.getElementById('bodyInstance');
    // body.setAttribute('class', 'profile-body');
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


