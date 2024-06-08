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

    const coloringGridContainer = document.createElement('div');
    coloringGridContainer.classList.add('coloring-grid-container');
    coloringGridContainer.setAttribute('id', 'coloringGridContainer');

    const coloringViewContainer = document.getElementById('#coloringViewContainer');
    coloringViewContainer.appendChild(coloringGridContainer);


    
}