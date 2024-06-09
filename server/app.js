const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});


const colors = ['lightblue', 'lightgreen', 'lightcoral', 'lightyellow'];
const userColors = {}; // { username: color }
const userSockets = {}; // { socketId: username }

io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    socket.on('setUsername', (username) => {
        if (!userColors[username]) {
            const availableColors = colors.filter(color => !Object.values(userColors).includes(color));
            if (availableColors.length > 0) {
                const assignedColor = availableColors[0];
                userColors[username] = assignedColor;
                userSockets[socket.id] = username;
                console.log(`Assigning color: ${assignedColor} to username: ${username}`);
                socket.emit('colorAssigned', assignedColor);
                console.log('check: if colorAssigned');
                io.emit('updateUsers', userColors);
                console.log('check: updateUsers');
            } else {
                socket.emit('colorAssigned', null); // No colors available
            }
        } else {
            socket.emit('colorAssigned', userColors[username]);
        }
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected:', socket.id);
        const username = userSockets[socket.id];
        if (username) {
            delete userColors[username];
            delete userSockets[socket.id];
            io.emit('updateUsers', userColors);
        }
    });
});




server.listen(3000);