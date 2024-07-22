import { createNavModel } from './creatNavModel.js'

export default function Nav(){
    const element = document.createElement('div');
    element.classList.add('horizontal-nav');
    element.appendChild(createNavModel());
    return element;
}

// Function to attach load event listeners to SVG objects
export function attachSVGLoadEventListeners(className, color) {
    const svgObjects = document.querySelectorAll(className);
    svgObjects.forEach(obj => {
        obj.addEventListener('load', () => {
            changeSVGColor(obj , color);
        });
    });
}

// Function to change SVG colors
export function changeSVGColor(obj, color) {
    const svgDoc = obj.contentDocument;
    if (svgDoc) {
        const svgElement = svgDoc.querySelector('svg');
        if (svgElement) {
            let fillColor = getComputedStyle(document.documentElement).getPropertyValue('--color-secondary').trim();
            if (color)
                fillColor = color;
            svgElement.querySelectorAll('path').forEach(element => {
                element.setAttribute('fill', fillColor);
            });
        }
    }
}
