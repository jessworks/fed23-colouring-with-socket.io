import coloringGrid from "./coloringGrid";
import createFinishedView from "./createFinishedView";

export default function createColoringView() {

    //referenceGrid()
    //coloringGrid()
    //chat()
    //'stop coloring' btn
    
    const startViewContainer = document.querySelector('#startViewContainer');
    startViewContainer.style.display = 'none';
    
    
    const coloringViewContainer = document.createElement('div');
    coloringViewContainer.classList.add('coloring-view-container');
    coloringViewContainer.setAttribute('id', 'coloringViewContainer');
    document.body.appendChild(coloringViewContainer);

    const pageTest = document.createElement('h1');
    pageTest.innerText = 'Coloring view';
    coloringViewContainer.appendChild(pageTest);

    coloringGrid();

    const stopColoringBtn = document.createElement('button');
    stopColoringBtn.classList.add('stop-coloring-btn');
    stopColoringBtn.setAttribute('id', 'stopColoringBtn');
    stopColoringBtn.innerText = 'Stop Coloring';
    coloringViewContainer.appendChild(stopColoringBtn);

    stopColoringBtn.addEventListener('click', () => {

        createFinishedView();
    });
};