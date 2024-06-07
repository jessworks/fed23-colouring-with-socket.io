//import referencegrid,coloringGrid, chat, quitbtn

export default function createColoringView() {
    
    const startViewContainer = document.querySelector('#startViewContainer');
    startViewContainer.style.display = 'none';
    
    
    const coloringViewContainer = document.createElement('div');
    coloringViewContainer.classList.add('coloring-view-container');
    coloringViewContainer.setAttribute('id', 'coloringViewContainer');
    document.body.appendChild(coloringViewContainer);

    const pageTest = document.createElement('h1');
    pageTest.innerText = 'Coloring view';
    coloringViewContainer.appendChild(pageTest);
};