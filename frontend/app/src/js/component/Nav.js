import { createNavModel } from './creatNavModel.js'

export default function Nav(){
    const element = document.createElement('div');
    element.classList.add('horizontal-nav');
    element.appendChild(createNavModel());
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
