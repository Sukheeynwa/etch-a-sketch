let horizontal = document.querySelector("#horizontal");
let vertical = document.querySelector("#vertical")

let grid = 32;

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

let div = document.querySelectorAll("#div")
let drag = false; 

let myOpacity = 0;
let red = 0;
let green = 0;
let blue = 0;

myOpacity = 0;

function changeColor() {
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
};

changeColor()