let horizontal = document.querySelector("#horizontal");

let myOpacity = 0;
let red = 120;
let green = 120;
let blue = 255;
myOpacity = 0.1;

let gridPicker = document.querySelector("#grid-picker")

gridPicker.addEventListener("input", () => {

    grid = Number(gridPicker.value);
    console.log(grid)

    const container = document.querySelector("#container")

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
    
    

    draw()
})

function draw() {
    let div = document.querySelectorAll("#div")
    let drag = false; 
    div.forEach((div) => {
        div.addEventListener('mousedown', (e) => {
            div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
            div.style.opacity = Number(div.style.opacity || myOpacity) + 0.1;
            drag = true
            console.log(e.type)
        }); 

        div.addEventListener('mouseup', (e) => {
            drag = false
        });

        div.addEventListener("mousemove", (e) => {
            if (drag === true) {
                div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
                div.style.opacity = Number(div.style.opacity || myOpacity) + 0.1;
                console.log(e.type)
            }
        });
    }
    );
}










