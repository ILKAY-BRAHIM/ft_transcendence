export const creatTitle = (content) => {
    const title = document.createElement('p');
    title.setAttribute('class', 'title');
    title.innerHTML = content;
    return title;
}

export const justABrTag = () => {
    const br = document.createElement('br');
    return br;
}