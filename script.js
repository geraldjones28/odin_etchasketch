const containerDiv = document.querySelector(".grid-container2");
const boxes = document.getElementsByClassName('col-boxes');
const row = document.getElementById('row');
const col = document.getElementById('col');
makeGrid();

function changeSize() {

}

/* Adds divs to DOM inputted by user (TBA) to create an even grid */
function makeGrid() {
    for (let i = 1; i <= row.textContent; i++) {
        const rowDiv = document.createElement("div");
        rowDiv.setAttribute('class', 'row-boxes');
        containerDiv.append(rowDiv);
        for (let j = 1; j <= col.textContent; j++) {
            const colDiv = document.createElement("div");
            colDiv.setAttribute('class', 'col-boxes');
            rowDiv.append(colDiv);
        }
    }
}

/* Gets the random color and shows it as mouse click-drags over squares */
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