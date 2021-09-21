
let gridNumber = 16;
 
let gridArea = gridNumber * gridNumber;

    for (let i = 1; i <= gridArea; i++) {
        const containerDiv = document.querySelector(".container");
        let div = document.createElement("div");
        let pItem = p = document.createElement("p");
        div.style.cssText= "border: '2px'; border-color: red; border-style: solid; text-align: center;"
    containerDiv.appendChild(div);

        pItem.textContent = 'divP';
    div.appendChild(pItem);

    }
