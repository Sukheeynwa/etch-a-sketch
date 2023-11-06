let horizontal = document.querySelector("#horizontal");
let vertical = document.querySelector("#vertical")

let grid = 16;

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

function changeColor(color) {
    div.forEach((div) => {
        div.addEventListener('mousedown', (e) => {
            drag = true
        }); 
    
        div.addEventListener('mouseup', (e) => {
            drag = false
        });
    
        div.addEventListener("mousemove", (e) => {
            if (drag === true) {
                div.style.backgroundColor = color;
            }
        });
    }
    );
}

changeColor("yellow")
