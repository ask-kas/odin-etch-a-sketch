const grid = document.querySelector("#grid");

function createGrid(size = 16){
    emptyGrid();

    for(let i=0; i<size; i++){
        let row = document.createElement("div");
        row.className = "row";
        for(let j=0; j<size; j++){
            let gridElem = document.createElement("div");
            gridElem.className = "grid-elem";

            gridElem.addEventListener("mousedown", function(){
                gridElem.style.backgroundColor = "blue";
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

document.addEventListener("DOMContentLoaded", ()=>createGrid());

const chooseSize = document.querySelector("#size");

chooseSize.addEventListener("click", ()=>createGrid(getSize()));

function getSize(){
    let input = prompt("Enter a number between 1 and 100");

    if (input === null) {
        // User clicked cancel — stop the recursion or return a special value
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