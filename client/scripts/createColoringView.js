import coloringGrid from "./coloringGrid";
import createChat from './createChat';
import createFinishedView from "./createFinishedView";

export default function createColoringView() {

    const existingColoringGrid = document.querySelector('#coloringGridContainer');
    if (existingColoringGrid) {
        existingColoringGrid.remove();
    }

    //referenceGrid()?
    
    const startViewContainer = document.querySelector('#startViewContainer');
    startViewContainer.style.display = 'none';
    
    const coloringViewContainer = document.createElement('div');
    coloringViewContainer.classList.add('coloring-view-container');
    coloringViewContainer.setAttribute('id', 'coloringViewContainer');
    document.body.appendChild(coloringViewContainer);

    const coloring = document.createElement('h1');
    coloring.innerText = 'coloring';
    coloringViewContainer.appendChild(coloring);

    
    coloringGrid();
    createChat();
    

    const stopColoringBtn = document.createElement('button');
    stopColoringBtn.classList.add('stop-coloring-btn');
    stopColoringBtn.setAttribute('id', 'stopColoringBtn');
    stopColoringBtn.innerText = 'Stop Coloring';
    coloringViewContainer.appendChild(stopColoringBtn);

    stopColoringBtn.addEventListener('click', () => {

        const coloringViewContainer = document.querySelector('#coloringViewContainer');
        coloringViewContainer.style.display = 'none';

        createFinishedView();
    });
};