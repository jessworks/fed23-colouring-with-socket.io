export default function coloringGrid() {
    // x coloringGridContainer
    //15 x 15 grid
    //clickable
    //$name your color is $color --> name from ls, color from css --> assign in startView clickevt assignColor()
    //add color when clicked
    //'lock' when colored
    //msg 'greatjob' when cells are full
    //append coloringGridContainer to coloringViewContainer
    //append coloringGrid items to coloringGridContainer
    // Create the coloring grid container
   
    const coloringGridContainer = document.createElement('div');
    coloringGridContainer.classList.add('coloring-grid-container');
    coloringGridContainer.setAttribute('id', 'coloringGridContainer');

    const coloringViewContainer = document.getElementById('coloringViewContainer');
    coloringViewContainer.appendChild(coloringGridContainer);
    
   
    
    
    // Set a username in local storage (for demonstration purposes)
    localStorage.setItem('username', 'user123');

    // Define a function to get the color associated with the username
    function getColorByUsername(username) {
        const colors = {
            'user123': 'lightblue',
            'user456': 'lightgreen',
            'user789': 'lightcoral',
        };
        return colors[username] || 'lightgray'; // Default color if username is not found
    }

    // Create the grid

    for (let i = 0; i < 225; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('click', function() {
            const username = localStorage.getItem('username');
            const color = getColorByUsername(username);
            cell.style.backgroundColor = color;
        });
        coloringGridContainer.appendChild(cell);
    }
};