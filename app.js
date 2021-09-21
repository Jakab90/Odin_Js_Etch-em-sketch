let gridNumber = 16;

draw();

function draw(){
    document.getElementById("content").innerHTML = "";
    let gridArea = gridNumber * gridNumber;
    const containerDiv = document.querySelector(".container");

    for (let i = 1; i <= gridArea; i++) {
        let div = document.createElement("div");
        div.classList.add("plexel");
        containerDiv.appendChild(div);
        div.addEventListener("mouseover", function moused() { 
            div.style.setProperty('background-color', 'black');
        ;});
    }
}

var slider = document.getElementById("myRange");
var output = document.getElementById("myRange");
output.innerHTML = slider.ariaValueMax;

slider.oninput = function() {
    output.innerHTML = this.ariaValueMax;
    gridNumber = document.getElementById("myRange").value;
    draw();
}