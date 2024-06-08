import startView from "./startView";

export default function createFinishedView() {
    const coloringViewContainer = document.querySelector('#coloringViewContainer');
    coloringViewContainer.style.display = 'none';

    const finishedViewContainer = document.createElement('div');
    finishedViewContainer.classList.add('finished-view-container');
    finishedViewContainer.setAttribute('id', 'finishedViewContainer');
    document.body.appendChild(finishedViewContainer);

    const quitBtn = document.createElement('button');
    quitBtn.classList.add('quit-btn');
    quitBtn.setAttribute('id', quitBtn);
    quitBtn.innerText = 'Quit';
    finishedViewContainer.appendChild(quitBtn);


    quitBtn.addEventListener('click', () => {

        const finishedViewContainer = document.querySelector('#finishedViewContainer');
        finishedViewContainer.style.display = 'none';

        startView();
    });
};