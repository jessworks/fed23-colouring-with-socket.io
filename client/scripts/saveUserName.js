export default function saveUser() {
    // check that element is in the DOM
    const userNameInput = document.querySelector('#userNameInput');
    if (userNameInput) {
        const userName = userNameInput.value;
        // save username in localStorage
        localStorage.setItem('name', userName);
    } else {
        console.error('#userNameInput element not found.');
    }
}