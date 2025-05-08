const grid = document.querySelector("#grid");
const chooseSize = document.querySelector("#size");
const clearGridBtn = document.querySelector("#clear");
const colorPicker = document.querySelector("#color");

let currentSize = 16;


function createGrid(size = 16){
    if(size === null){
        return null;
    }

    emptyGrid();

    for(let i=0; i<size; i++){
        let row = document.createElement("div");
        row.className = "row";
        for(let j=0; j<size; j++){
            let gridElem = document.createElement("div");
            gridElem.className = "grid-elem";

            gridElem.addEventListener("mousedown", function(){
                gridElem.style.backgroundColor = colorPicker.value;
            })

            row.appendChild(gridElem);
        }
        grid.appendChild(row);
    }
}

function emptyGrid(){
    let rows = document.querySelectorAll("div .row");
    let gridElems = document.querySelectorAll("div .grid-elem");

    gridElems.forEach(gridElem => gridElem.remove());
    rows.forEach(row => row.remove());
}

clearGridBtn.addEventListener("click", ()=>clearGrid());

function clearGrid(){
    let gridElems = document.querySelectorAll("div .grid-elem");

    gridElems.forEach(gridElem => gridElem.style.backgroundColor = "white");
}

document.addEventListener("DOMContentLoaded", ()=>createGrid());

chooseSize.addEventListener("click", function(e){
    if(createGrid(getSize()) === null){
        e.stopImmediatePropagation();
    }

});

function getSize(){
    let input = prompt("Enter a number between 1 and 100");

    if (input === null) {
       return null;
    }

    let size = parseInt(input);

    if((size <= 0 || size > 100) || isNaN(size)){
        return getSize();
    }
    else if(size >= 1 && size <= 100){
        return size;
    }
    else{
        return getSize();
    }
}