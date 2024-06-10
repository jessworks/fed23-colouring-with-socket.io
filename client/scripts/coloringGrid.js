import socket from './socket';


export default function coloringGrid() {
    const coloringGridContainer = document.createElement('div');
    coloringGridContainer.classList.add('coloring-grid-container');
    coloringGridContainer.setAttribute('id', 'coloringGridContainer');

    const coloringViewContainer = document.getElementById('coloringViewContainer');
    coloringViewContainer.appendChild(coloringGridContainer);
    
   
    let userColors = {};
    let assignedColor = null;
    
    socket.on('colorAssigned', (color) => {
        console.log(`Received colorAssigned event with color: ${color}`);
        if (color) {
            assignedColor = color;
            
            const username = localStorage.getItem('username');
            const yourColorMsg = document.createElement('p');
            yourColorMsg.setAttribute('id', 'yourColorMsg');
            yourColorMsg.innerText = (`${username}, you are ${assignedColor}`);
            coloringGridContainer.appendChild(yourColorMsg);
        } else {
            alert('No colors available, please try again later.');
        }
    });
    
    socket.on('updateUsers', (updatedUserColors) => {
        userColors = updatedUserColors;
        console.log('Updated users and their colors:', userColors);
    });
    
    socket.on('initialCellStates', (cellStates) => {
        console.log('Received initial cell states:', cellStates);
        Object.keys(cellStates).forEach((position) => {
            const color = cellStates[position];
            const cell = coloringGridContainer.children[position];
            if (cell) {
                cell.style.backgroundColor = color;
            }
        });
    });

    socket.on('cellStateUpdated', (data) => {
        const { position, color } = data;
        const cell = coloringGridContainer.children[position];
        if (cell) {
            cell.style.backgroundColor = color;
        }
    });


    for (let i = 0; i < 225; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('click', function() {
            const username = localStorage.getItem('username');
            if (username && assignedColor) {
                cell.style.backgroundColor = assignedColor;
                const cellPosition = i;
                socket.emit('updateCellState', { position: cellPosition, color: assignedColor });
            } else {
                alert('You need to set a username first.');
            }
        });
        coloringGridContainer.appendChild(cell);
    };
};
  