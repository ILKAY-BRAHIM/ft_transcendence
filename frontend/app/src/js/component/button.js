export  const creatButton = (display, size, color, text) => {
    const button = document.createElement('button');
    if (display === 'false')
        button.setAttribute('class', display);
    else
    {
        button.setAttribute('class', `btn ${size} ${color}`);
        button.innerHTML = text;
    }
    return button;
}