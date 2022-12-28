const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet'
];

const container = document.querySelector('#boxes');
const colorInput = document.querySelector('#color-input'); 
const colorDisplay = document.querySelector('#color-display');
const list = document.querySelector(`#list`);

for (let color of colors) {
    const box = document.createElement('div');
    container.appendChild(box);
    box.style.backgroundColor = color;
    box.classList.add('box');
    box.classList.add(`${color}`)
    box.addEventListener('click', mouseHover);

    function mouseHover(e) { 
        colorDisplay.innerHTML =  box.style.backgroundColor;
        colorDisplay.style.color = color;
    }
}

colorInput.focus();
colorInput.addEventListener('keypress', keyInput);
function keyInput (e) { 
    if (e.key === 'Enter') {
        for (let color of colors) {
            const singleBox = document.querySelector(`.${color}`);
            if (this.value === color) {
                document.querySelector(`.${this.value}`).style.borderColor = 'black';
                colorDisplay.style.color = 'black';
                colorDisplay.innerHTML = 'Correct!';
                singleBox.style.backgroundColor = 'white';

                // create an element
                let response = document.createElement('li');
                response.innerText = color.charAt(0).toUpperCase() + color.slice(1);;
                response.style.color = color;
                console.log(response);
                list.insertBefore(response, list.children[0]);
                setTimeout(function() {
                    colorDisplay.style.color = color;
                    colorDisplay.innerHTML = color;
                    singleBox.style.backgroundColor = color;
                    colorInput.value = '';
                }, 1000);
                return
            }   
        }
        colorDisplay.innerHTML = 'Wrong!';
        colorInput.value = '';
        setTimeout(() => colorDisplay.innerHTML = '', 1000);
        colorDisplay.style.color = 'black';
    }
}