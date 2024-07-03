import { createIcon, icons } from './icons.js';

export const searchBar = () =>  {
    const bar = document.createElement('div');
    bar.setAttribute('class', 'search-bar');

    const inputBar = document.createElement('input');
    inputBar.setAttribute('text', 'text');
    inputBar.setAttribute('placeholder', 'Search...');
    
    const searchIcon = document.createElement('button');
    const ic = createIcon(icons.Search, 'icon');
    ic.setAttribute('id', 'iconId');
    searchIcon.appendChild(createIcon(icons.Search, 'icon'));

    bar.appendChild(inputBar);
    bar.appendChild(searchIcon);
    
    return bar;
};
