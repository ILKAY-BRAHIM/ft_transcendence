const base = '/src/assets/images/';
import { registerationPage } from "./registration.js";
import { loginPage } from "./login.js";

const welcomePage = () => {
    const element = document.createElement('div');
    element.setAttribute('class', 'welcome-page home-page sub-page-active');
    element.setAttribute('id', 'homePage');

    const btn = document.createElement('button');
    btn.innerHTML = 'sign up';

    btn.addEventListener('click', () => {
        document.querySelector('.home-page').classList.remove('sub-page-active');
        document.querySelector('.registeration-page').classList.add('sub-page-active');
    });

    const btnLogin = document.createElement('button');
    btnLogin.innerHTML = 'sign in';

    btnLogin.addEventListener('click', () => {
        document.querySelector('.home-page').classList.remove('sub-page-active');
        document.querySelector('.login-page').classList.add('sub-page-active');
    });

    const p = document.createElement('h1');
    p.setAttribute('class', 'wasga');
    p.innerHTML = 'wazga go back to work  [!]<br>';

    // const link = document.createElement('a');
    // link.setAttribute('href', '/profile');
    // link.innerHTML = 'Go to profile';

    const img = document.createElement('img');
    img.setAttribute('src', `${base}whip-cool-whip.gif`);
    img.setAttribute('alt', 'just a juck gif');
    img.setAttribute('class', 'wasga-img');
    const br = document.createElement('br');
    element.appendChild(p);
    element.appendChild(img);
    element.appendChild(br);
    element.appendChild(btn);
    // element.appendChild(link);
    element.appendChild(btnLogin);
    return element;
}



export default function Welcome() {
    const element = document.createElement('div');

    element.appendChild(welcomePage());
    element.appendChild(registerationPage());
    element.appendChild(loginPage());
    return element;
}

