const init = (el, buttonColor) => {
    const button = document.createElement('button');
    button.innerText = 'Click me3';

    if (buttonColor) {
        button.style.backgroundColor = buttonColor;
    }

    el.appendChild(button);
}

export default init;