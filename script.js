const containerDiv = document.querySelector(".grid-container");
const boxes = document.getElementsByClassName('box');

/* Adds 273 divs to create an even 16x16 grid */
for (let j = 1; j <= 273; j++) {
    const newDiv = document.createElement("div");
    newDiv.setAttribute('class', 'box');
    containerDiv.append(newDiv);
}

for (let i = 0 ; i < boxes.length; i++) {
    boxes[i].addEventListener('mouseover', (e) => {
        boxes[i].style.backgroundColor = 
        "rgb("+e.offsetX+","+e.offsetY+", 40)";
        console.log('x:' + e.offsetX + ", y:" + e.offsetY);
    }) ; 
}