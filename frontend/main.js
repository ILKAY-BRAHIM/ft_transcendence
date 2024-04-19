import dashboard from "./dashboard.js";
import posts from "./posts.js";
import settings from "./settings.js";
import login from "./login.js";

const routes = {
    "/": { title: "Dashboard", render: dashboard },
    "/posts": { title: "Posts", render: posts },
    "/settings": { title: "Settings", render: settings },
    "/submit": { title: "Submit", render: login },
};

const app = document.getElementById('app');

function router() {
    let view = routes[location.pathname];

    if (view) {
        document.title = view.title;
        app.innerHTML = view.render();
    } else {
        history.replaceState("", "", "/");
        router();
    }
};
const loginForm = document.getElementById('app');


loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username');
    const password = document.getElementById('password');

    // Validate the fields
    if (username.value === '') {
        alert('Please enter your username');
        return;
    }

    if (password.value === '') {
        alert('Please enter your password');
        return;
    }

    // Validate user's credentials here...

    // If validation is successful, change the route
    if (username.value === "root" && password.value === "123456")
    {
        history.pushState("", "", "/submit");
        router();
    }
    else
    {
        alert('pass and usser incorcto');
        return;
    }
});

// Handle navigation
window.addEventListener("click", e => {
    if (e.target.matches("[data-link]")) {
        e.preventDefault();
        history.pushState("", "", e.target.href);
        router();
    }
});

const allLinks = document.querySelectorAll('a');

// Add click event listener to each link
allLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        allLinks.forEach(otherLink => {
            if (otherLink !== this) { 
                otherLink.style.color = ''; // Reset color
                otherLink.style.backgroundColor = ''; // Reset background color
                otherLink.style.border = ''; // Reset border
                otherLink.style.borderRadius = ''; // Reset border radius
                otherLink.style.transform = '';
            }
        });
        this.style.transform = 'translateX(1rem)';
    });
});

// Update router
window.addEventListener("popstate", router);
window.addEventListener("DOMContentLoaded", router);
