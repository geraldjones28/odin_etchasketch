const containerDiv = document.querySelector(".grid-container");
const boxes = document.getElementsByClassName('box');

/* Adds 273 divs to create an even 16x16 grid */
for (let j = 1; j <= 273; j++) {
    const newDiv = document.createElement("div");
    newDiv.setAttribute('class', 'box');
    containerDiv.append(newDiv);
}

/* Generates a random color as mouse hovers over squares */
for (let i = 0 ; i < boxes.length; i++) {
    boxes[i].addEventListener('mouseover', (e) => {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);

        boxes[i].style.backgroundColor = 
        "rgb("+red+","+green+","+blue+")";
    }) ; 
}

/* Refreshes the page to give a clean grid */
function resetGame() {
    location.reload();
}