//import functions (socket?)




export default function startView() {
    //
    const startViewContainer = document.createElement('div');
    startViewContainer.classList.add('main-container');


    const pageTitle = document.createElement('h1');
    pageTitle.innerText = 'Color With Friends';


    const userNameForm = document.createElement('form');
    userNameForm.id = 'userNameForm';


    const userNameLabel = document.createElement('label');
    userNameLabel.htmlFor = 'inputField';
    userNameLabel.textContent = 'Enter username';


    const userNameInput = document.createElement('input');
    userNameInput.type = 'text';
    userNameInput.id = 'userNameInput';
    userNameInput.name = 'userNameInput';
    userNameInput.required = true;


    const letsColorBtn = document.createElement('button');
    letsColorBtn.type = 'submit';
    letsColorBtn.id = 'letsColorBtn';
    letsColorBtn.disabled = true;
    letsColorBtn.textContent = `Let's color!`;


    document.body.append(startViewContainer);
    startViewContainer.append(pageTitle);
    startViewContainer.append(userNameForm);
    userNameForm.appendChild(userNameLabel);
    userNameForm.appendChild(userNameInput);
    userNameForm.appendChild(letsColorBtn);




    userNameInput.addEventListener('input', () => {
        if (userNameInput.value.trim() === '') {
           
            letsColorBtn.disabled = true;


        } else {


            letsColorBtn.disabled = false;
        }
    });


    letsColorBtn.addEventListener('click', () => {
        startViewContainer.innerHTML = '';


            //coloringView();   saveUserName();     assignColor();
    })
};


