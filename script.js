const containerDiv = document.querySelector(".grid-container");
const boxes = document.getElementsByClassName('box');

/* Adds 273 divs to create an even 16x16 grid */
for (let j = 1; j <= 273; j++) {
    const newDiv = document.createElement("div");
    newDiv.setAttribute('class', 'box');
    containerDiv.append(newDiv);
}

/* Generates a random color as mouse click-drags over squares */
for (let i = 0 ; i < boxes.length; i++) {
    boxes[i].addEventListener('mousedown', () => {
        boxes[i].style.backgroundColor = getRandomColor();
    }); 
    boxes[i].addEventListener('mouseenter', (e) => {
        if (e.buttons === 1) {
            boxes[i].style.backgroundColor = getRandomColor();
        }
    }); 
}

/* Generate a random color */
function getRandomColor() {
    let c1 = Math.floor(Math.random() * (150 - 120) + 120);
    let c2 = Math.floor(Math.random() * (150 - 120) + 120);
    let c3 = Math.floor(Math.random() * (150 - 120) + 120);

    return "rgb("+c1+","+c2+","+c3+")";
}

/* Refreshes the page to give a clean grid */
function resetGame() {
    location.reload();
}