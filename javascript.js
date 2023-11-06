let horizontal = document.querySelector("#horizontal");
let vertical = document.querySelector("#vertical")

let verticalGrid = 16;
let horizontalGrid = 16;

for (let i = 1; i <= verticalGrid; i++) {
    let i = document.createElement("div");
    i.setAttribute("id", "horizontal");
    vertical.append(i);

    for (let j = 1; j <= horizontalGrid; j++) {
        let j = document.createElement("div");
        j.setAttribute("id", "div");
        i.appendChild(j);
    };
};

let div = document.querySelectorAll("#div")


div.forEach((div) => {
    div.addEventListener("mousedown", (e) => {
        div.style.backgroundColor = "coral";
        console.log(e.type)
    })
}) 

div.forEach((div) => {
    div.addEventListener("mouseup", (e) => {
        div.style.backgroundColor = "teal";
        console.log(e.type)
    })
}) 
