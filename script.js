/* Starter Variables */
const containerDiv = document.querySelector(".grid-container");
const row = document.getElementsByClassName('row');
const square = document.getElementsByClassName('square');
let darkenAmount = 25;

/* Initialize Grid */
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
        row.textContent = 16;
        square.textContent = 16;
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
            squareDiv.style.height = `${600 / row.textContent}px`;
            squareDiv.style.width = `${600 / row.textContent}px`;
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

/* Generates drawing function & darkens as drawn over squares */
function mouseEvents() {
    for (let i = 0 ; i < square.length; i++) {
        square[i].addEventListener('mousedown', () => {
            square[i].style.backgroundColor = "rgb(210, 210, 210)";
        }); 
        
        square[i].addEventListener('mouseenter', (e) => {
            if (e.buttons === 1) {
                let currentColor = square[i].style[`background-color`];

                if (!currentColor) {
                    square[i].style[`background-color`] = `rgb(210, 210, 210)`;
                } else {
                    /* The REGEX matches the RGB values and creates an array of the RGB values */
                    const initialRGB = currentColor.match(/\d+/g);

                    let newRGB = [
                        initialRGB[0] - darkenAmount,
                        initialRGB[1] - darkenAmount,
                        initialRGB[2] - darkenAmount
                    ];
                    square[i].style[`background-color`] =
                    `rgb(${newRGB[0]}, ${newRGB[1]},${newRGB[2]})`;
                }
            }
        }); 
    }
}

/* Refreshes the page to give a clean grid */
function resetGame() {
    location.reload();
}