import socket from './socket';

export default function saveUser() {
    // check that element is in the DOM
    const usernameInput = document.querySelector('#usernameInput');
    if (usernameInput) {
        const username = usernameInput.value;
        // save username in localStorage
        localStorage.setItem('username', username);
        socket.emit('setUsername', username);
        console.log('emits from saveUsername: setUsername, username');
    } else {
        console.error('errorMsg:', '#usernameInput element not found.');
    }
}
