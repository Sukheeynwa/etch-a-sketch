let horizontal = document.querySelector("#horizontal");
let container = document.querySelector("#container");
let gridPicker = document.querySelector("#grid-picker");
let opacityPicker = document.querySelector("#opacity-picker");
let btn = document.querySelector("#reset-btn")

let myOpacity = 1;
let grid = 16;

let red = 120;
let green = 120;
let blue = 255;

function draw() {
    let div = document.querySelectorAll("#div")
    let drag = false; 

    div.forEach((div) => {
        div.addEventListener('mousedown', (e) => {
            div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
            div.style.opacity = Number(div.style.opacity || myOpacity) + 0.1;
            drag = true
        }); 

        div.addEventListener('mouseup', (e) => {
            drag = false
        });

        div.addEventListener("mousemove", (e) => {
            if (drag === true) {
                div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
                div.style.opacity = Number(div.style.opacity || myOpacity) + 0.1;
            }
        });
    }
    );

    btn.addEventListener("click", () => {
        div.forEach((div) => {
            div.style.backgroundColor = ""
        })
    })
};

function createGrid() {
    while(container.firstChild) {
        container.removeChild(container.firstChild)
    }

    let vertical = document.createElement("div");
    vertical.setAttribute("id", "vertical")
    container.appendChild(vertical);

    for (let i = 1; i <= grid; i++) {

        let i = document.createElement("div");
        i.setAttribute("id", "horizontal");
        vertical.append(i);
    
        for (let j = 1; j <= grid; j++) {
            let j = document.createElement("div");
            j.setAttribute("id", "div");
            i.appendChild(j);
        };  
    };
    draw();
};

createGrid()



gridPicker.addEventListener("input", () => {
    grid = Number(gridPicker.value);
    createGrid();
});

opacityPicker.addEventListener("input", () => {
    myOpacity = Number(opacityPicker.value) / 100;
});

let redValue = document.querySelector("#red-picker")
let greenValue = document.querySelector("#green-picker")
let blueValue = document.querySelector("#blue-picker")

redValue.addEventListener("input", () => {
    red = Number(redValue.value)
})

greenValue.addEventListener("input", () => {
    green = Number(greenValue.value)
})

blueValue.addEventListener("input", () => {
    blue = Number(blueValue.value)
})

function eraser() {
    let div = document.querySelectorAll("#div")
    let drag = false; 

    div.forEach((div) => {
        div.addEventListener('mousedown', (e) => {
            div.style.backgroundColor = "white"
            div.style.opacity = Number(div.style.opacity || myOpacity) + 0.1;
            drag = true
        }); 

        div.addEventListener('mouseup', (e) => {
            drag = false
        });

        div.addEventListener("mousemove", (e) => {
            if (drag === true) {
                div.style.backgroundColor = "white"
                div.style.opacity = Number(div.style.opacity || myOpacity) + 0.1;
            }
        });
    }
    );

    btn.addEventListener("click", () => {
        div.forEach((div) => {
            div.style.backgroundColor = ""
        })
    })
};

let myEraser = document.querySelector("#eraser-btn");
myEraser.addEventListener("click", eraser)
