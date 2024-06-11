//import functions (socket?)
import saveUsername from './saveUsername.js';
import createColoringView from './createColoringView.js';



export default function startView() {
    
    const startViewContainer = document.createElement('div');
    startViewContainer.classList.add('start-view-container');
    startViewContainer.setAttribute('id', 'startViewContainer');


    const pageTitle = document.createElement('h1');
    pageTitle.innerText = 'Color With Friends';


    const usernameForm = document.createElement('form');
    usernameForm.id = 'usernameForm';

    const usernameLabel = document.createElement('label');
    usernameLabel.htmlFor = 'inputField';
    usernameLabel.textContent = 'Enter username';

    const usernameInput = document.createElement('input');
    usernameInput.type = 'text';
    usernameInput.id = 'usernameInput';
    usernameInput.name = 'usernameInput';
    usernameInput.required = true;

    const letsColorBtn = document.createElement('button');
    letsColorBtn.type = 'button';
    letsColorBtn.id = 'letsColorBtn';
    letsColorBtn.disabled = true;
    letsColorBtn.textContent = `Let's color!`;


    document.body.append(startViewContainer);
    startViewContainer.append(pageTitle);
    startViewContainer.append(usernameForm);
    usernameForm.appendChild(usernameLabel);
    usernameForm.appendChild(usernameInput);
    usernameForm.appendChild(letsColorBtn);

    
    usernameInput.addEventListener('input', () => {
        if (usernameInput.value.trim() === '') {
            letsColorBtn.disabled = true;
        } else {
            letsColorBtn.disabled = false;
        }
    });


    letsColorBtn.addEventListener('click', () => {

        saveUsername();
        createColoringView();
    });
};


