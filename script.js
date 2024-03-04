const containerDiv = document.querySelector(".grid-container");

/* Adds 273 divs to create an even 16x16 grid */
for (let j = 1; j <= 273; j++) {
    const newDiv = document.createElement("div");
    newDiv.className = "color";
    containerDiv.append(newDiv);
}

/* Working on changing color feature when mouse hovers over div */
/* containerDiv.addEventListener('mousemove', (e) => {
    containerDiv.style.backgroundColor = 
    "rgb("+e.offsetX+","+e.offsetY+", 40)";
    console.log('x:' + e.offsetX + ", y:" + e.offsetY);
}); */