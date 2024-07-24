const base = '/src/assets/images/';
import { justABrTag } from '../component/generale.js';

export const loginPage = () => {
    const body = document.createElement('div');
    body.setAttribute('class', 'welcome-page login-page');
    body.setAttribute('id', 'loginPage');

    const img = document.createElement('img');
    img.setAttribute('src', `${base}whip-cool-whip.gif`);

    const form = document.createElement('form');
    form.setAttribute('action', '/profile');
    form.setAttribute('method', 'GET');

    // Email input
    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'email');
    emailLabel.innerHTML = 'Email address';

    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('name', 'name');
    emailInput.setAttribute('placeholder', 'enter email address');
    emailInput.setAttribute('required', 'required');
    
    // Password input
    const passwordLabel = document.createElement('label');
    passwordLabel.setAttribute('for', 'password');
    passwordLabel.innerHTML = 'password';
    const passwordInput = document.createElement('input');
    passwordInput.setAttribute('type', 'password');
    passwordInput.setAttribute('name', 'password');
    passwordInput.setAttribute('placeholder', 'Password');
    passwordInput.setAttribute('required', 'required');

    // Submit button
    const submit = document.createElement('button');
    submit.setAttribute('type', 'submit');
    submit.innerHTML = 'Sing in';

    form.appendChild(emailLabel);
    form.appendChild(justABrTag());
    form.appendChild(emailInput);
    form.appendChild(justABrTag());

    form.appendChild(passwordLabel);
    form.appendChild(justABrTag());
    form.appendChild(passwordInput);
    form.appendChild(justABrTag());

    form.appendChild(submit);

    body.appendChild(img);
    body.appendChild(form);

    return body;

}
