export default function Nav(){
    const element = document.createElement('div');
    element.classList.add('horizontal-nav');
    element.innerHTML = `<img class="logo" src="./src/assets/logo.svg" alt="ping-pong-logo">
        <ul>
            <li>
                <object class="hor-nav-icons" data="./src/assets/icons/home.svg" type="image/svg+xml"></object>
                <a href="/">home</a>
            </li>
            <li>
                <object class="hor-nav-icons" data="./src/assets/icons/profile.svg" type="image/svg+xml"></object>
                <a href="/profile">profile</a>
            </li>
            <li>
                <object class="hor-nav-icons" data="./src/assets/icons/message.svg" type="image/svg+xml"></object>
                <a href="/message">message</a>
            </li>
            <li>
                <object class="hor-nav-icons" data="./src/assets/icons/friends.svg" type="image/svg+xml"></object>
                <a href="/friends">friends</a>
            </li>
            <li>
                <object class="hor-nav-icons" data="./src/assets/icons/leaderboard.svg" type="image/svg+xml"></object>
                <a href="/leaderboard">leaderboard</a>
            </li>
            <li>
                <object class="hor-nav-icons" data="./src/assets/icons/game.svg" type="image/svg+xml"></object>
                <a href="/game">game</a>
            </li>
            <li>
                <object class="hor-nav-icons" data="./src/assets/icons/champion.svg" type="image/svg+xml"></object>
                <a href="/champion">champion</a>
            </li>
            <li class="last-item">
                <object class="hor-nav-icons"  data="./src/assets/icons/settings.svg" type="image/svg+xml"></object>
                <a href="/settings">settings</a>
            </li>
        </ul>`;
    return element;
}

// Function to attach load event listeners to SVG objects
export function attachSVGLoadEventListeners() {
    const svgObjects = document.querySelectorAll('object.hor-nav-icons');
    svgObjects.forEach(obj => {
        obj.addEventListener('load', () => {
            changeSVGColor(obj);
        });
    });
}

// Function to change SVG colors
export function changeSVGColor(obj) {
    const svgDoc = obj.contentDocument;
    if (svgDoc) {
        const svgElement = svgDoc.querySelector('svg');
        if (svgElement) {
            const fillColor = getComputedStyle(document.documentElement).getPropertyValue('--color-secondary').trim();
            svgElement.querySelectorAll('path').forEach(element => {
                element.setAttribute('fill', fillColor);
            });
        }
    }
}