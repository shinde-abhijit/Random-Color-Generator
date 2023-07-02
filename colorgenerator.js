const container = document.querySelector(".container");

for(let index = 0; index < 100; index++){
    const colorContainer = document.createElement("div");
    colorContainer.classList.add("color-container");
    container.appendChild(colorContainer);
    const filled = document.querySelector('.filled')
}

const colorContainers = document.querySelectorAll(".color-container")

colorGenerate();

function colorGenerate(){
    colorContainers.forEach((colorContainer)=>{
        const newColorCode = randColor();
        colorContainer.style.backgroundColor = "#" + newColorCode;
        colorContainer.innerText = "#" + newColorCode; 
    })    
}

function randColor(){
    const char = "0123456789abcdef"
    const colorCodeLength = 6;
    let colorCodes = "";
    for(let index = 0; index < colorCodeLength; index++){
        const randomNumber = Math.floor(Math.random() * char.length);
        colorCodes += char.substring(randomNumber, randomNumber + 1)
        console.log(colorCodes)
    }
    return colorCodes;
}




