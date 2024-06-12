import socket from './socket.js';


export default function createChat() {

    const existingChatContainer = document.getElementById('chatContainer');
    if (existingChatContainer) {
        existingChatContainer.remove();
    }

    const coloringViewContainer = document.querySelector('#coloringViewContainer');

    const chatContainer = document.createElement('div');
    chatContainer.setAttribute('id', 'chatContainer');

    const chatForm = document.createElement('form');
    chatForm.id = 'chatForm';

    const chatLabel = document.createElement('label');
    chatLabel.htmlFor = 'inputField';
    chatLabel.textContent = 'Write something';

    const chatInput = document.createElement('input');
    chatInput.type = 'text';
    chatInput.id = 'chatInput';
    chatInput.name = 'chatInput';
    chatInput.required = true;

    const sendMsgBtn = document.createElement('button');
    sendMsgBtn.type = 'button';
    sendMsgBtn.id = 'sendMsgBtn';
    sendMsgBtn.disabled = true;
    sendMsgBtn.textContent = `Send`;

    const chatList = document.createElement('ul');
    chatList.setAttribute('id', 'chatList');


    coloringViewContainer.appendChild(chatContainer);
    chatContainer.appendChild(chatForm);
    chatForm.appendChild(chatLabel);
    chatForm.appendChild(chatInput);
    chatForm.appendChild(sendMsgBtn);
    chatContainer.appendChild(chatList);
   
    
    chatInput.addEventListener('input', () => {
        if (chatInput.value.trim() === '') {
            sendMsgBtn.disabled = true;
        } else {
            sendMsgBtn.disabled = false;
        }
    });

    // - connect chat to socket to show all sent msgs in all clients browsers
    let username = localStorage.getItem('username');

    sendMsgBtn.addEventListener('click', () => {
        console.log('msg input', chatInput.value);
        socket.emit('chat', {message: chatInput.value, username: username});
        chatInput.value = '';
    });

    
    socket.on('chat', (arg) => {
        console.log('socket', arg);
        updateChat(arg);
    });
    

    /*socket.off('chat'); // Remove existing listeners to avoid duplication
    socket.on('chat', (arg) => {
        console.log('socket', arg);
        updateChat(arg);
    });
    */

    function updateChat(chat) {
        const chatMsg = document.createElement('li');
        chatMsg.innerText = chat.username + ': ' + chat.message;
        chatList.appendChild(chatMsg);
    };
};
