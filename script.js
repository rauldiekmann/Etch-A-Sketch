//MAIN CONTAINER
const grid = document.querySelector('.grid-container');




//LOOP TO ADD 256 CONTAINERS. These are arranged in styles sheet with CSS grid
for (var i = 0; i < 256; i++) {
    let gridItem=document.createElement('div');
    gridItem.className='grid-item';
    gridItem.addEventListener('mouseover', changeColor);
    gridItem.addEventListener('mousedown', changeColor);
    grid.appendChild(gridItem);
}



//HOVER EFFECT done with CSS

//BUTTON THAT CHANGES GRID LAYOUT
/*Añade tantos cuadros al div como le pidas.
1.Elimina todos los gridItem creados previamente con removeAllChildNodes
2.Modifica las propiedades template-columns/row del grid-container
para ajustar al nuevo nº de cuadros
3.Añada los nuevos cuadros al div hecho a medida */


document.getElementById('buttonGrid').addEventListener("click",
function(){
    var gridLayout = prompt("Select new grid side");
    removeAllChildNodes(grid);

    
    grid.style.gridTemplateColumns = `repeat(${gridLayout},minmax(0,1fr))`;
    grid.style.gridTemplateRows = `repeat(${gridLayout},minmax(0,1fr))`;


    for (var i = 0; i < (Math.pow(gridLayout,2)); i++) {
        let gridItem=document.createElement('div');
        gridItem.className='grid-item';
        gridItem.addEventListener('mouseover', changeColor);
        gridItem.addEventListener('mousedown', changeColor);
        grid.appendChild(gridItem);
    }
});



function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function changeColor(e) {
    if (e.type === 'mouseover' && "mouseDown"){
        e.target.style.backgroundColor = "black";}
}
  




