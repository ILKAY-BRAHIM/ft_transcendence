export const creatTitle = (content) => {
    const title = document.createElement('p');
    title.setAttribute('class', 'title');
    title.innerHTML = content;
    return title;
}