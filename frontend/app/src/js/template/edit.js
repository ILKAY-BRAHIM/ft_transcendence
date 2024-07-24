// type : email , text , password
// name : name of the input field
// placeholder : placeholder of the input field
// required : required or not
// label : title of the input field

import { creatButton } from '../component/button.js';
import { creatProfileImage } from '../component/profile.js';
import { goTo } from '../services/route.js';
import { justABrTag } from '../component/generale.js';

const generateInput = (type, name, title, placeholder, required, className) => {
    const element = document.createElement('div');
    element.setAttribute('class', 'input-container ' + className);

    const label = document.createElement('label');
    // label.setAttribute('for', name);
    label.innerHTML = title;
    const input = document.createElement('input');
    input.setAttribute('type', type);
    input.setAttribute('name', name);
    input.setAttribute('placeholder', placeholder);
    input.setAttribute('required', required);


    element.appendChild(label);
    element.appendChild(justABrTag());
    element.appendChild(input);
    element.appendChild(justABrTag());
    return element;
};



const editDisplayInfoForm = () => {
    const element = document.createElement('form');
    element.setAttribute('class', 'edit-display-info');
    element.setAttribute('method', 'GET');
    element.setAttribute('action', '/profile');

    const titel = document.createElement('p');
    titel.setAttribute('class', 'title');
    titel.innerHTML = 'display info';

    const titel2 = document.createElement('p');
    titel2.setAttribute('class', 'title');
    titel2.innerHTML = 'who can see';

    element.appendChild(titel);
    element.appendChild(generateInput('text', 'name', 'Display Name', 'Microob'));
    element.appendChild(generateInput('text', 'username', 'User Name', 'brahiiiim'));
    element.appendChild(generateInput('text', 'status', 'my Status', 'online'));
    element.appendChild(generateInput('text', 'from', 'From', 'Morocco, tetouan', '', 'lastOne'));
    element.appendChild(titel2);
    element.appendChild(generateInput('text', 'howCanSee', 'intra login', 'everyone'));
    
    return element;
};

const editPasswordForm = () => {

    const element = document.createElement('form');
    element.setAttribute('class', 'edit-password');
    element.setAttribute('method', 'GET');
    element.setAttribute('action', '/profile');

    const titel = document.createElement('p');
    titel.setAttribute('class', 'title');
    titel.innerHTML = 'change password';

    element.appendChild(titel);
    element.appendChild(generateInput('password', 'currantPassword', 'currant password', '********'));
    element.appendChild(generateInput('password', 'newPassword', 'new password', '**********'));
    element.appendChild(generateInput('password', 'confirmPassword', 'confirm password', '**********'));

    const btn = creatButton('btn', 'md', 'primary', 'save');
    element.appendChild(btn);

    return element;
}

export default function EditProfile() {

    const element = document.createElement('div');
    element.setAttribute('class', 'edit-profile');

    const submit = creatButton('btn', 'md', 'primary', 'update');
    submit.addEventListener('click', () => {
        goTo('/profile');
    });

    const cancel = creatButton('btn', 'md', 'primary', 'cancel');
    cancel.addEventListener('click', () => {
        goTo('/profile');
    });

    const middel = document.createElement('div');
    middel.setAttribute('class', 'edit-profile-middel');

    element.appendChild(cancel);
    middel.appendChild(creatProfileImage('', 'img-md'));
    middel.appendChild(editDisplayInfoForm());
    middel.appendChild(editPasswordForm());
    element.appendChild(middel);
    element.appendChild(submit);

    return element;
}