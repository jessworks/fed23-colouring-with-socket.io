import socket from './socket.js';


export default function createChat() {
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

    //print mgs as they come
    const chatMsgs = document.createElement('li');
    chatMsgs.setAttribute('id', 'chatMsgs');



    coloringViewContainer.append(chatContainer);
    chatContainer.appendChild(chatForm);
    chatForm.appendChild(chatLabel);
    chatForm.appendChild(chatInput);
    chatForm.appendChild(sendMsgBtn);
    chatContainer.appendChild(chatList);
    chatList.appendChild(chatMsgs);

    
    chatInput.addEventListener('input', () => {
        if (chatInput.value.trim() === '') {
            sendMsgBtn.disabled = true;
        } else {
            sendMsgBtn.disabled = false;
        }
    });

    // - connect chat to socket to show all sent msgs in all clients browsers
    sendMsgBtn.addEventListener('click', () => {
        //print msg, connect through socket

    });
};
