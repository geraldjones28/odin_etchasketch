const containerDiv = document.querySelector(".grid-container");
const row = document.getElementsByClassName('row');
const square = document.getElementsByClassName('square');
row.textContent = 16;
square.textContent = 16;
makeGrid();

function changeSize() {
    resetGrid();
    const num = prompt(
        "Change the size of the board (resolution). Min: 16 Max: 100"
    );
    if ((num >= 16) && (num <= 100)) {
        row.textContent = num;
        square.textContent = num;
        makeGrid();
    } else {
        makeGrid();
    }
}

/* Adds divs to DOM inputted by user (TBA) to create an even grid */
function makeGrid() {
    for (let i = 1; i <= row.textContent; i++) {
        const rowDiv = document.createElement("div");
        rowDiv.setAttribute('class', 'row');
        containerDiv.append(rowDiv);
        for (let j = 1; j <= square.textContent; j++) {
            const squareDiv = document.createElement("div");
            squareDiv.setAttribute('class', 'square');
            squareDiv.style.height = `${500 / row}px`;
            squareDiv.style.width = `${500 / row}px`;
            rowDiv.append(squareDiv);
        }
    }
    mouseEvents();
}
/* Refreshes grid pre changeSize() function */
function resetGrid() {
    const squareRows = document.querySelectorAll(".row");
    squareRows.forEach((row) => {
    containerDiv.removeChild(row);
    mouseEvents();
  });
}

/* Gets the random squareor and shows it as mouse click-drags over squares */
function mouseEvents() {
    for (let i = 0 ; i < square.length; i++) {
        square[i].addEventListener('mousedown', () => {
            square[i].style.backgroundColor = getRandomColor();
        }); 
        square[i].addEventListener('mouseenter', (e) => {
            if (e.buttons === 1) {
                square[i].style.backgroundColor = getRandomColor();
            }
        }); 
    }
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