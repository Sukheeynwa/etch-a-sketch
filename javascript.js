let horizontal = document.querySelector("#horizontal");
let container = document.querySelector("#container");
let gridPicker = document.querySelector("#grid-picker");
let opacityPicker = document.querySelector("#opacity-picker");
let colorPicker = document.getElementById("color-picker");
let eraserBtn = document.querySelector("#eraser-btn");
let clearBtn = document.querySelector("#reset-btn")
let colorBtn = document.querySelector("#color-btn")
let div = document.querySelectorAll("#div")

let defaultColor = "#000000"
let defaultOpacity = 1;
let defaultGrid = 16;
let drag = false; 


function draw() {
    let div = document.querySelectorAll("#div")

    // Mouse event listeners
    div.forEach((div) => {
        div.addEventListener('mousedown', (e) => {
            div.style.backgroundColor = defaultColor;
            div.style.opacity = Number(div.style.opacity || defaultOpacity) + 0.1;
            drag = true
        }); 

        div.addEventListener('mouseup', (e) => {
            drag = false
        });

        div.addEventListener("mousemove", (e) => {
            if (drag === true) {
                div.style.backgroundColor = defaultColor;
                div.style.opacity = Number(div.style.opacity || defaultOpacity) + 0.1;
            }
        });
    }
    );

    // Change html text
    let gridSizeContainer = document.querySelector("#grid-size-container");
    let gridSize = document.createElement("h4");
    gridSize.textContent = `Grid size: ${defaultGrid} x ${defaultGrid}`;
    while(gridSizeContainer.firstChild) {
        gridSizeContainer.removeChild(gridSizeContainer.firstChild);
    };
    gridSizeContainer.appendChild(gridSize);

    let opacityContainer = document.querySelector("#opacity-picker-container");
    let opacitySize = document.createElement("h4");
    opacitySize.textContent = `Opacity: ${Math.round(defaultOpacity * 100)}`;
    while(opacityContainer.firstChild) {
        opacityContainer.removeChild(opacityContainer.firstChild);
    };
    opacityContainer.appendChild(opacitySize);
};

function eraser() {
    let div = document.querySelectorAll("#div")

    div.forEach((div) => {
        div.addEventListener('mousedown', (e) => {
            div.style.backgroundColor = "white"
            div.style.opacity = Number(div.style.opacity || 0);
            drag = true
        }); 

        div.addEventListener('mouseup', (e) => {
            drag = false
        });

        div.addEventListener("mousemove", (e) => {
            if (drag === true) {
                div.style.backgroundColor = "white"
                div.style.opacity = Number(div.style.opacity || 0);
            }
        });
    }
    );
};

function createGrid() {
    while(container.firstChild) {
        container.removeChild(container.firstChild)
    }

    let vertical = document.createElement("div");
    vertical.setAttribute("id", "vertical")
    container.appendChild(vertical);

    for (let i = 1; i <= defaultGrid; i++) {

        let i = document.createElement("div");
        i.setAttribute("id", "horizontal");
        vertical.append(i);
    
        for (let j = 1; j <= defaultGrid; j++) {
            let j = document.createElement("div");
            j.setAttribute("id", "div");
            i.appendChild(j);
        };  
    };
    draw();
};

createGrid();

// Grid picker event listener
gridPicker.addEventListener("input", () => {
    defaultGrid = Number(gridPicker.value);
    createGrid();

    let gridSizeContainer = document.querySelector("#grid-size-container");
    let gridSize = document.createElement("h4");
    gridSize.textContent = `Grid size: ${defaultGrid} x ${defaultGrid}`;
    while(gridSizeContainer.firstChild) {
        gridSizeContainer.removeChild(gridSizeContainer.firstChild);
    };
    gridSizeContainer.appendChild(gridSize);
});

// Opacity picker event listener
opacityPicker.addEventListener("input", () => {
    defaultOpacity = Number(opacityPicker.value) / 100;

    let opacityContainer = document.querySelector("#opacity-picker-container");
    let opacitySize = document.createElement("h4");
    opacitySize.textContent = `Opacity: ${Math.round(defaultOpacity * 100)}`;
    while(opacityContainer.firstChild) {
        opacityContainer.removeChild(opacityContainer.firstChild);
    };
    opacityContainer.appendChild(opacitySize);
});

// Color picker event listener
colorPicker.addEventListener("input", function() {
    defaultColor = colorPicker.value;
});

// Eraser event listener
eraserBtn.addEventListener("click", eraser);

// Color event listener
colorBtn.addEventListener("click", () => {
    draw();
});

// Clear event listener
clearBtn.addEventListener("click", createGrid);