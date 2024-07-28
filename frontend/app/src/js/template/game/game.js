import { creatButton } from "../../component/button.js";
import { creatProfileImage } from "../../component/profile.js";
import { goTo } from "../../services/route.js";

export default function Game() {
    const element = document.createElement('div');
    element.setAttribute('class', 'game');

    const img = creatProfileImage('gold-profile-img', 'img-md');

    const middle = document.createElement('div');
    middle.setAttribute('class', 'middle');

    const btnCreate = creatButton('true', 'btn-xl', 'btn-primary', 'Create a tournament');
    middle.appendChild(btnCreate);
    // btnCreate.addEventListener('click', () => {
    //     goTo('/createTournament');
    // });

    const btnPlayOnline = creatButton('true', 'btn-xl', 'btn-primary', 'Play online');
    // btnPlayOnline.addEventListener('click', () => {
    //     goTo('/play');
    // });
    middle.appendChild(btnPlayOnline);

    const btnPlayOffline = creatButton('true', 'btn-xl', 'btn-primary', 'Play offline');
    btnPlayOffline.addEventListener('click', () => {
        goTo('/play');
    });
    middle.appendChild(btnPlayOffline);

    element.appendChild(img);
    element.appendChild(middle);
    const btnBack = creatButton('true', 'btn-xl', 'btn-primary', 'Back');
    element.appendChild(btnBack);
    btnBack.addEventListener('click', () => {
        goTo('/home');
    });


    return element;
}
