const base = '/src/assets/images/';
import { justABrTag } from '../component/generale.js';

export const registerationPage = () => {
    const body = document.createElement('div');
    body.setAttribute('class', 'welcome-page registeration-page');
    body.setAttribute('id', 'registerationPage');

    const img = document.createElement('img');
    img.setAttribute('src', `${base}whip-cool-whip.gif`);

    const form = document.createElement('form');
    form.setAttribute('action', '/profile'); //should be changed to the correct path
    form.setAttribute('method', 'GET'); //should be changed to the correct method

    // Email input
    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'email');
    emailLabel.innerHTML = 'add your email';

    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('name', 'name');
    emailInput.setAttribute('placeholder', 'enter your email');
    emailInput.setAttribute('required', 'required');
    
    // Name input
    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'name');
    nameLabel.innerHTML = 'add your name';
    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('name', 'name');
    nameInput.setAttribute('placeholder', 'chose a name');
    nameInput.setAttribute('required', 'required');

    // Password input
    const passwordLabel = document.createElement('label');
    passwordLabel.setAttribute('for', 'password');
    passwordLabel.innerHTML = 'Choose a password';
    const passwordInput = document.createElement('input');
    passwordInput.setAttribute('type', 'password');
    passwordInput.setAttribute('name', 'password');
    passwordInput.setAttribute('placeholder', 'Password');
    passwordInput.setAttribute('required', 'required');

    // Submit button
    const submit = document.createElement('button');
    submit.setAttribute('type', 'submit');
    submit.innerHTML = 'Sing up';

    form.appendChild(emailLabel);
    form.appendChild(justABrTag());
    form.appendChild(emailInput);
    form.appendChild(justABrTag());

    form.appendChild(nameLabel);
    form.appendChild(justABrTag());
    form.appendChild(nameInput);
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