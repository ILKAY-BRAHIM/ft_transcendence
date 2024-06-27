import  Nav from './component/Nav.js';
import { navigatTo } from './services/route.js';
import { attachSVGLoadEventListeners } from './component/Nav.js';


function renderComponent(component) {
    const root = document.getElementById('nav-container');
    root.innerHTML = ''; // Clear existing content
    root.appendChild(component);
    attachSVGLoadEventListeners();
}

document.addEventListener('DOMContentLoaded', function() {
    renderComponent(Nav());
});


// It must reveuse it's logic [!]
document.addEventListener("click", (e) => {
    const { target } = e;
    if (target.matches("a")) {
        e.preventDefault();
        navigatTo(e);
    }
});