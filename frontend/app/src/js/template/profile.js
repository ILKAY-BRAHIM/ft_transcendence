import { creatProfileInfo, creatProfileInstance, creatProfileImage} from '../component/profile.js';
import { creatButton } from '../component/button.js';

import { createIcon, icons } from '../component/icons.js';
import { creatTitle } from '../component/generale.js';

const base = '/src/assets/images/';

// export default function Profile() {
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
    element.setAttribute('class', 'box achievement');

    element.appendChild(creatAchievement());
    element.appendChild(creatAchievement());
    element.appendChild(creatAchievement());

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
    listOfFriend.appendChild(friendInstence());
    
    element.appendChild(title);
    element.appendChild(listOfFriend);

    return element;
}

export default function Profile() {
    // const element = document.getElementById('test');
    const element = document.createElement('div');
    element.setAttribute('class', 'profile-body');

    const leftBox = document.createElement('div');
    leftBox.setAttribute('class', 'left');

    const img = creatProfileImage('', 'img-md');
    const info = creatProfileInfo();
    const button = creatButton('true', 'btn-sm', 'btn-gold', 'Edit profile');
    leftBox.appendChild(creatProfileInstance(img, info, button, 'right-bottom', 'profile-card-md'));

    const leftMiddel = document.createElement('div');
    leftMiddel.setAttribute('class', 'middel');
    leftMiddel.appendChild(badgesCollected());
    leftMiddel.appendChild(personalInformations());
    leftMiddel.appendChild(championsAchievement());

    leftBox.appendChild(leftMiddel);


    const rightBox = document.createElement('div');
    rightBox.setAttribute('class', 'right');

    const rightMiddel = document.createElement('div');
    rightMiddel.setAttribute('class', 'middel');

    
    rightBox.appendChild(achievement());
    rightMiddel.appendChild(profileSectionRank());
    rightMiddel.appendChild(profileSectionFriend());

    rightBox.appendChild(rightMiddel);

    element.appendChild(leftBox);
    element.appendChild(rightBox);
    return element;
};