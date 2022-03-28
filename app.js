
const container = document.getElementById('container');

const weirdButton = document.getElementById('btn');

weirdButton.addEventListener('click', addBoxes);

const resetButton = document.getElementById("resetButton");

resetButton.addEventListener("click", reset);

function reset(){

    let boxDivs = document.getElementsByClassName("box");
    Array.from(boxDivs).forEach((el) => {
        el.classList.remove("hoveredBox")
        console.log(el.tagName);
    });
        
};

//This changes the color of the currently hovered element only if it's class is "box"
  document.onmouseover = function(e) {
       let currentBox = (e.target.id);
       let boxToChange = document.getElementById(currentBox);
       if (boxToChange.classList.contains("box")){
       boxToChange.classList.add("hoveredBox");
       }
    }


//This function adds all the boxes 
function addBoxes() {
    let requestedSize = document.getElementById('number').value;
    let gridSize = requestedSize * requestedSize;

    container.style.gridTemplateColumns = `repeat(${requestedSize}, minmax(0, 1fr))`;
    container.style.gridTemplateRows =  `repeat(${requestedSize}, minmax(0, 1fr))`;

//this gives each box a unique id so it can be addressed individually.
    for (let i = 0; i <= gridSize - 1; i++) {
    const boxDiv = document.createElement('div');
    boxDiv.setAttribute('class', 'box');
    boxDiv.setAttribute('id', "box" + i);
    container.appendChild(boxDiv);
    }
    
}



