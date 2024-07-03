const base = '/frontend/app/src/assets/images/';

export const creatProfileImage = () => {
    const profile = document.createElement('div');
    profile.setAttribute('class', 'profile-image');
    const image = document.createElement('img');
    image.setAttribute('src', `${base}squer-girl.png`); //most change with exporting from data base 
    image.setAttribute('alt', 'profile image');
    profile.appendChild(image);
    return profile;
};

export const creatProfileInstance = () => {
    const profile = document.createElement('div');
    const info = document.createElement('div');
    info.setAttribute('class', 'info');

    const nickName = document.createElement('p');
    nickName.innerHTML = "Lukyyyy"; //database

    const name = document.createElement('p');
    name.setAttribute('class', 'light');
    name.innerHTML = "My name is luky"; //database

    info.appendChild(nickName);
    info.appendChild(name);
    profile.setAttribute('class', 'profile-card')
    profile.appendChild(creatProfileImage());
    profile.appendChild(info);
    return profile
};