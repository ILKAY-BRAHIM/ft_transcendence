import  Nav from './component/Nav.js';
import { navigatTo } from './services/route.js';
import { attachSVGLoadEventListeners } from './component/Nav.js';
import { creatHeader } from './component/header.js';
import Welcome from './template/welcome.js';
import { urlLocationHandler } from './services/route.js';

let A = 0;

export function renderComponent(component) {
    const root = document.getElementById('nav-container');
    root.innerHTML = '';
    root.appendChild(component);
    attachSVGLoadEventListeners('object.hor-nav-icons');
};


document.addEventListener('DOMContentLoaded', function() {
    urlLocationHandler();
});


document.addEventListener("click", (e) => {
    const { target } = e;
    if (target.matches("a")) {
        e.preventDefault();
        navigatTo(e);
    }
});


