<h1>Etch-a-Sketch</h1>
This is a simple JavaScript program that creates an etch-a-sketch grid and allows you to draw on it by hovering your mouse over the grid. It also allows you to change the size of the grid by clicking on a button.


<h1>Usage</h1>
The program creates a grid by adding multiple divs to a container element. Each of these divs has a class of "grid-item" and is styled using CSS grid to arrange them in a grid pattern.

When you hover over a grid item, the background color of the item changes to black, allowing you to draw on the grid.

To change the size of the grid, simply click on the "Change Grid Size" button. This will prompt you to enter a new size for the grid, and the program will create a new grid with the specified size.

<h1>Code Explanation</h1>
The following is a brief explanation of the code:

The main container element is selected using the querySelector method and stored in the grid variable. <br>
A loop is used to add 256 grid items to the container element. Each item is created using the createElement method and given a class of "grid-item".<br>
Event listeners are added to each item to detect mouseover and mousedown events, which trigger the changeColor function. <br>
The changeColor function is called when a grid item is hovered over or clicked. It checks the type of event and changes the background color of the item to black if the event is a mouseover or mousedown event.<br>
The removeAllChildNodes function is called when the "Change Grid Size" button is clicked. It removes all the child nodes of the container element to clear the current grid.<br>
The button click event listener prompts the user to enter a new size for the grid, and then creates a new grid with the specified size using a loop similar to the one used to create the initial grid.<br>
