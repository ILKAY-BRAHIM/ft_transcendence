const base = '/src/assets/images/';

const welcomePage = () => {
    const element = document.createElement('div');
    element.setAttribute('class', 'welcome-page home-page sub-page-active');
    element.setAttribute('id', 'homePage');

    const btn = document.createElement('button');
    btn.innerHTML = 'log in';

    btn.addEventListener('click', () => {
        document.querySelector('.home-page').classList.remove('sub-page-active');

        document.querySelector('.registeration-page').classList.add('sub-page-active');
    });

    const p = document.createElement('h1');
    p.setAttribute('class', 'wasga');
    p.innerHTML = 'wazga go back to work  [!]<br>';

    const link = document.createElement('a');
    link.setAttribute('href', '/profile');
    link.innerHTML = 'Go to profile';

    const img = document.createElement('img');
    img.setAttribute('src', `${base}whip-cool-whip.gif`);
    img.setAttribute('alt', 'just a juck gif');
    img.setAttribute('class', 'wasga-img');
    const br = document.createElement('br');
    element.appendChild(p);
    element.appendChild(img);
    element.appendChild(br);
    element.appendChild(btn);
    element.appendChild(link);
    return element;
}

const justABrTag = () => {
    const br = document.createElement('br');
    return br;
}

const registerationPage = () => {
    const body = document.createElement('div');
    body.setAttribute('class', 'welcome-page registeration-page');
    body.setAttribute('id', 'registerationPage');

    const img = document.createElement('img');
    img.setAttribute('src', `${base}whip-cool-whip.gif`);

    const form = document.createElement('form');
    form.setAttribute('action', '#');
    form.setAttribute('method', 'POST');

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

const loginPage = () => {
    const body = document.createElement('div');
    body.setAttribute('class', 'welcome-page login-page');
    body.setAttribute('id', 'loginPage');

    const img = document.createElement('img');
    img.setAttribute('src', `${base}whip-cool-whip.gif`);

    const form = document.createElement('form');
    form.setAttribute('action', '#');
    form.setAttribute('method', 'POST');

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


export default function Welcome() {
    const element = document.createElement('div');

    element.appendChild(welcomePage());
    element.appendChild(registerationPage());
    element.appendChild(loginPage());
    return element;
}

