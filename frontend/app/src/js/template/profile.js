import { creatProfileInfo, creatProfileInstance, creatProfileImage} from '../component/profile.js';
import { creatButton } from '../component/button.js';

import { createIcon, icons } from '../component/icons.js';
import { creatTitle } from '../component/generale.js';
import { attachSVGLoadEventListeners } from '../component/Nav.js';
// import { navigatTo } from '../services/route.js';
import { goTo } from '../services/route.js';

const base = '/src/assets/images/';

// ---------------------------------------- Left side Instence --------------------------------------------

// the single component of personal information (icon, title, data)
const personalInfo = (iconName , titel, data) => {
    const element = document.createElement('div');
    element.setAttribute('class', 'personal-info-entity');

    const info = document.createElement('div');
    info.setAttribute('class', 'personal-info');
    info.appendChild(createIcon(iconName, 'icon-sm'));
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
    champion.appendChild(championsAchievementCard());
    // champion.appendChild(championsAchievementCard());
    return champion;
}

// ---------------------------------------- Right side Instence --------------------------------------------

const creatPolygon = (position, imageLink) => {
    const polygon = document.createElement('div');
    polygon.setAttribute('class', `polygone polygone-${position}`);

    const userName = document.createElement('p');
    userName.setAttribute('class', `player-name ${position}`);
    userName.innerHTML = 'you';

    const userImg = document.createElement('img');
    userImg.setAttribute('src', imageLink);
    userImg.setAttribute('alt', 'user image');

    polygon.appendChild(userName);
    polygon.appendChild(userImg);

    return polygon;
}

export const creatMatchHistory = (type) => {
    const element = document.createElement('div');
    element.setAttribute('class', 'union');
    
    const result = document.createElement('p');
    result.setAttribute('class', `result ${type}`);
    result.innerHTML = 'victory';

    element.appendChild(creatPolygon('match-left', `${base}default.png`));
    element.appendChild(creatPolygon('match-right', `${base}cat.avif`));
    element.appendChild(result);

    return element;
}

const matchHistory = () => {
    const element = document.createElement('div');
    element.setAttribute('class', 'box match-history');

    const title = document.createElement('p');
    title.setAttribute('class', 'title');
    title.innerHTML = 'match history';

    
    const collection = document.createElement('div');
    collection.setAttribute('class', 'match-history-collection');
    collection.appendChild(creatMatchHistory('defeat'));
    collection.appendChild(creatMatchHistory('vectory'));
    collection.appendChild(creatMatchHistory('defeat'));
    collection.appendChild(creatMatchHistory('defeat'));
    collection.appendChild(creatMatchHistory('vectory'));
    collection.appendChild(creatMatchHistory('vectory'));
    
    element.appendChild(title);
    element.appendChild(collection);
    return element;
}

// Global rank

const rankInstence = () => {
    const instance = document.createElement('li');
    instance.setAttribute('class', 'instance');
    
    const rankPosition = document.createElement('p');
    rankPosition.setAttribute('class', 'rank-position');
    rankPosition.innerHTML = '1';

    const img = creatProfileImage("", "img-xs");
    const info = creatProfileInfo();
    const button = creatButton('false');

    const rankPoint = document.createElement('p');
    rankPoint.setAttribute('class', 'rank-point');
    rankPoint.innerHTML = "10500";
    rankPoint.innerHTML += " point";
    
    instance.appendChild(rankPosition);
    instance.appendChild(creatProfileInstance(img, info, '', '', 'profile-card-xs'));
    instance.appendChild(rankPoint);
    return instance;
}

const profileSectionRank = () => {
    const element = document.createElement('div');
    element.setAttribute('class', 'box rank');

    const title = document.createElement('p');
    title.setAttribute('class', 'title');
    title.innerHTML = 'global rank';

    const listOfRank = document.createElement('ul');
    listOfRank.setAttribute('class', 'list-of-rank');
   

    listOfRank.appendChild(rankInstence());
    listOfRank.appendChild(rankInstence());
    listOfRank.appendChild(rankInstence());
    listOfRank.appendChild(rankInstence());
    listOfRank.appendChild(rankInstence());
    listOfRank.appendChild(rankInstence());

    element.appendChild(title);
    element.appendChild(listOfRank);

    return element;
}

const friendInstence = () =>{

    const instance = document.createElement('li');

    const img = creatProfileImage("", "img-xl");
    const info = creatProfileInfo();
    const button = creatButton('true', 'btn-sm', 'btn-gold', 'say hello');

    instance.appendChild(creatProfileInstance(img, info, button, 'same-row', 'profile-card-xs'));

    return instance;
}

const profileSectionFriend = () => {
    const element = document.createElement('div');
    element.setAttribute('class', 'box friend');

    const title = creatTitle('friend');

    const listOfFriend = document.createElement('ul');
    listOfFriend.setAttribute('class', 'list-of-friend');

    
    listOfFriend.appendChild(friendInstence());
    listOfFriend.appendChild(friendInstence());
    listOfFriend.appendChild(friendInstence());
    listOfFriend.appendChild(friendInstence());
    listOfFriend.appendChild(friendInstence());
    listOfFriend.appendChild(friendInstence());
    
    element.appendChild(title);
    element.appendChild(listOfFriend);

    return element;
}

export default function Profile() {
    const element = document.createElement('div');
    element.setAttribute('class', 'profile-body');

    const leftBox = document.createElement('div');
    leftBox.setAttribute('class', 'left');

    const img = creatProfileImage('', 'img-md');
    const info = creatProfileInfo();
    const button = creatButton('true', 'btn-sm', 'btn-gold', 'Edit profile');

    button.addEventListener('click', () => {
        goTo('/edit');
    });

    leftBox.appendChild(creatProfileInstance(img, info, button, 'right-bottom', 'profile-card-md'));

    const leftMiddel = document.createElement('div');
    leftMiddel.setAttribute('class', 'middel');
    leftMiddel.appendChild(personalInformations());
    leftMiddel.appendChild(championsAchievement());

    leftBox.appendChild(leftMiddel);


    const rightBox = document.createElement('div');
    rightBox.setAttribute('class', 'right');

    const rightMiddel = document.createElement('div');
    rightMiddel.setAttribute('class', 'middel');

    
    rightBox.appendChild(matchHistory());
    rightMiddel.appendChild(profileSectionRank());
    rightMiddel.appendChild(profileSectionFriend());

    rightBox.appendChild(rightMiddel);



    element.appendChild(leftBox);
    element.appendChild(rightBox);

   

    return element;
};