import  Nav from './component/Nav.js';
import { navigatTo } from './services/route.js';
import { attachSVGLoadEventListeners } from './component/Nav.js';
import { creatHeader } from './component/header.js';


function renderComponent(component) {
    const root = document.getElementById('nav-container');
    root.innerHTML = '';
    root.appendChild(component);
    attachSVGLoadEventListeners();
}

document.addEventListener('DOMContentLoaded', function() {
    renderComponent(Nav());
    const header = document.getElementById('page-body');
    header.appendChild(creatHeader());
});


// It must reveuse it's logic [!]
document.addEventListener("click", (e) => {
    const { target } = e;
    if (target.matches("a")) {
        e.preventDefault();
        navigatTo(e);
    }
});