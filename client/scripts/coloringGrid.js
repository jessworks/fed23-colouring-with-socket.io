import { io } from "socket.io-client";
const socket = io("http://localhost:3000"); 

export default function coloringGrid() {
    // x coloringGridContainer
    // x 15 x 15 grid
    // - clickable  --> solve colorAssigned on server side, it blocks the if/else which colours cells
    // - $name your color is $color 
    // - add color when clicked
    // - msg 'greatjob' when cells are full
    // x append coloringGridContainer to coloringViewContainer
    // x append coloringGrid items to coloringGridContainer
    // x create the coloring grid container
   
    const coloringGridContainer = document.createElement('div');
    coloringGridContainer.classList.add('coloring-grid-container');
    coloringGridContainer.setAttribute('id', 'coloringGridContainer');

    const coloringViewContainer = document.getElementById('coloringViewContainer');
    coloringViewContainer.appendChild(coloringGridContainer);
    
   
    let userColors = {};
    let assignedColor = null; // Store the color assigned to the current user
    
    
    socket.on('colorAssigned', (color) => {
        console.log(`Received colorAssigned event with color: ${color}`);
        if (color) {
            assignedColor = color;
            alert(`Your color is ${color}`);
        } else {
            alert('No colors available, please try again later.');
        }
    });
    
    socket.on('updateUsers', (updatedUserColors) => {
        userColors = updatedUserColors;
        console.log('Updated users and their colors:', userColors);
    });
    
    // Create the grid
    
    for (let i = 0; i < 225; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('click', function() {
            const username = localStorage.getItem('username');
            console.log(`Click detected. Username: ${username}, Assigned color: ${assignedColor}`);
            if (username && assignedColor) {
                console.log('check: if');
                cell.style.backgroundColor = assignedColor;
                // Optionally, send the updated cell state to the server here
                //const cellPosition = i; // Assuming i is the position of the cell in the grid
                //socket.emit('updateCellState', { position: cellPosition, color: assignedColor });

            } else {
                alert('You need to set a username first.');
            }
        });
        coloringGridContainer.appendChild(cell);
    }
};
  