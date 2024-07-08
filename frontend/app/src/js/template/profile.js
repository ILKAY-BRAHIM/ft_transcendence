import { creatProfileInfo, creatProfileInstance, creatProfileImage} from '../component/profile.js';
import { creatButton } from '../component/button.js';

import { createIcon, icons } from '../component/icons.js';

const base = '/frontend/app/src/assets/images/';

// export default function Profile() {
//     const element = document.createElement('div');
//     element.setAttribute('class', 'profile-body');

//     const leftBox = document.createElement('div');
//     leftBox.setAttribute('class', 'left');

//     const img = creatProfileImage();
//     const info = creatProfileInfo();
//     const button = creatButton('true');
//     leftBox.appendChild(creatProfileInstance(img, info, button, 'col', 'profile-card-md'));

//     const rightBox = document.createElement('div');
//     rightBox.setAttribute('class', 'right');
//     return element;
// }


// ---------------------------------------- Left side Instence --------------------------------------------
const badgesCollected = () => {
    const element = document.createElement('div');
    element.setAttribute('class', 'box');

    const title = document.createElement('p');
    title.setAttribute('class', 'title');
    title.innerHTML = 'badges collected';

    const badge = document.createElement('div');
    badge.setAttribute('class', 'badges');
    badge.appendChild(createIcon(icons.Champion));
    badge.appendChild(createIcon(icons.Leaderboard));

    element.appendChild(title);
    element.appendChild(badge);

    return element;
};

// the single component of personal information (icon, title, data)
const personalInfo = (iconName , titel, data) => {
    const element = document.createElement('div');
    element.setAttribute('class', 'personal-info-entity');

    const info = document.createElement('div');
    info.setAttribute('class', 'personal-info');
    info.appendChild(createIcon(iconName));
    let subTitle = document.createElement('p');
    subTitle.setAttribute('class', 'sub-title');
    subTitle.innerHTML = titel;
    info.appendChild(subTitle);

    element.appendChild(info);
    let content = document.createElement('p');
    content.setAttribute('class', 'content');
    content.innerHTML = data;
    element.appendChild(content);

    return element;
};

// the second box that display the personal information with icons 
const personalInformations = () => {
    const element = document.createElement('div');
    element.setAttribute('class', 'box');

    const title = document.createElement('p');
    title.setAttribute('class', 'title');
    title.innerHTML = 'personal information';

    const boxs = document.createElement('div');
    boxs.setAttribute('class', 'info-boxs');
    boxs.appendChild(personalInfo(icons.Profile, 'user name', 'should be fetched'));
    boxs.appendChild(personalInfo(icons.Profile, 'user name', 'should be fetched'));
    boxs.appendChild(personalInfo(icons.Profile, 'user name', 'should be fetched'));
    boxs.appendChild(personalInfo(icons.Profile, 'user name', 'should be fetched'));
    boxs.appendChild(personalInfo(icons.Profile, 'user name', 'should be fetched'));

    element.appendChild(title);
    element.appendChild(boxs);
    return element;
};

// it's should be fetch the data from the backend
const championsAchievementCard = () => {
    const card = document.createElement('div');
    card.setAttribute('class', 'champion-card');

    const imageBox = document.createElement('div');
    imageBox.setAttribute('class', 'image-box');

    const image = document.createElement('img');
    image.setAttribute('src', `${base}champion.png`);
    imageBox.appendChild(image);

    const championsInfo = document.createElement('div');
    championsInfo.setAttribute('class', 'champions-info');
    let titel = document.createElement('p');
    titel.setAttribute('class', 'champion-title');
    titel.innerHTML = "big champion of winter";
    let date = document.createElement('p');
    date.setAttribute('class', 'date');
    date.innerHTML = "june 15, 2024";
    championsInfo.appendChild(titel);
    championsInfo.appendChild(date);

    let result = document.createElement('p');
    const text = document.createElement('span');
    text.innerHTML = '/';
    result.setAttribute('class', 'result');
    let personalRank = document.createElement('span');
    personalRank.innerHTML = '5';
    let totalPlayer = document.createElement('span');
    totalPlayer.innerHTML = '16';
    result.appendChild(personalRank);
    result.appendChild(text);
    result.appendChild(totalPlayer);

    card.appendChild(imageBox);
    card.appendChild(championsInfo);
    card.appendChild(result);

    return card;
};

const championsAchievement = () => {
    const champion = document.createElement('div');
    champion.setAttribute('class', 'box');

    const title = document.createElement('p');
    title.setAttribute('class', 'title');
    title.innerHTML = "champions  achievement";

    champion.appendChild(title);
    champion.appendChild(championsAchievementCard());
    champion.appendChild(championsAchievementCard());
    champion.appendChild(championsAchievementCard());
    champion.appendChild(championsAchievementCard());
    return champion;
}

// ---------------------------------------- Right side Instence --------------------------------------------

const creatAchievement = () => {
    const element = document.createElement('div');
    element.setAttribute('class', 'achiev-box');

    return element;
}

const achievement = () => {
    const element = document.createElement('div');
    element.setAttribute('class', 'achievement');

    element.appendChild(creatAchievement());
    element.appendChild(creatAchievement());
    element.appendChild(creatAchievement());

    return element;
}

// Global rank



export default function ProfileTest() {
    const element = document.getElementById('page-body');
    element.setAttribute('class', 'profile-body');

    const leftBox = document.createElement('div');
    leftBox.setAttribute('class', 'left');

    const img = creatProfileImage('', 'img-md');
    const info = creatProfileInfo();
    const button = creatButton('true', 'btn-sm', 'btn-gold', 'Edit profile');
    leftBox.appendChild(creatProfileInstance(img, info, button, 'col', 'profile-card-md'));

    const middel = document.createElement('div');
    middel.setAttribute('class', 'middel');
    middel.appendChild(badgesCollected());
    middel.appendChild(personalInformations());
    middel.appendChild(championsAchievement());

    leftBox.appendChild(middel);


    const rightBox = document.createElement('div');
    rightBox.setAttribute('class', 'right');

    rightBox.appendChild(achievement());

    element.appendChild(leftBox);
    element.appendChild(rightBox);
    return element;
};