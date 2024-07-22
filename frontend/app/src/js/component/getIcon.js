const svgStore = {};

async function preloadSVG(svgUrl) {
    const response = await fetch(svgUrl);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const svgText = await response.text();
    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(svgText, 'image/svg+xml');
    const svgElement = svgDoc.querySelector('svg');
    
    if (svgElement) {
        svgStore[svgUrl] = svgElement;
    } else {
        console.warn('SVG tag not found');
    }
}

async function preloadAllSVGs(svgUrls) {
    await Promise.all(svgUrls.map(url => preloadSVG(url)));
}

function colorSVG(svgElement, color) {
    const elements = svgElement.querySelectorAll('*');
    elements.forEach(el => {
        el.setAttribute('fill', color);
    });
    return svgElement.cloneNode(true);
}

export function getIcon(svgUrl, color) {
    const svgElement = svgStore[svgUrl];
    if (svgElement) {
        return colorSVG(svgElement, color);
    } else {
        console.error('SVG not preloaded:', svgUrl);
        return null;
    }
}
