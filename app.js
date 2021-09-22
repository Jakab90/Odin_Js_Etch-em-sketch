let gridNumber = 16;
let cellColor = 'black';
let isRainbow = false;
let rCell = 0;
let cellColors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet'];

draw();

function draw(){
    document.getElementById("content").innerHTML = "";
    let gridArea = gridNumber * gridNumber;
    const containerDiv = document.querySelector(".container");
    let w = 540/gridNumber;
    for (let i = 1; i <= gridArea; i++) {
        let div = document.createElement("div");
        div.style.setProperty('width', w +"px");
        div.classList.add("plexel");
        containerDiv.appendChild(div);
        div.addEventListener("mouseover", function moused() {
            if(isRainbow){
                div.style.setProperty('background-color', cellColors[rCell%6]);
                rCell++;
            } else {
                div.style.setProperty('background-color', cellColor);
            }
        ;});
    }
}

let slider = document.getElementById("myRange");
let output = document.getElementById("outPut");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
    gridNumber = document.getElementById("myRange").value;
}

let clearButton = document.getElementById("clear");

clearButton.addEventListener("click", function(){
    document.getElementById("content").innerHTML = "";
    draw();
});

let startButton = document.getElementById("start");

startButton.addEventListener("click", function(){
    draw();
});

let blackButton = document.getElementById("black");

blackButton.addEventListener("click", function(){
   cellColor = 'black';
   isRainbow = false;
});

let rainbowButton = document.getElementById("rainbow");

rainbowButton.addEventListener("click", function() {
    rCell = 0;
    isRainbow = true;
});