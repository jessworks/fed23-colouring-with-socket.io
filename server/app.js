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
const cellStates = {}; // { position: color }

io.on('connection', (socket) => {           //duplicates emits for each round --> how do i stop it
    console.log('A user connected:', socket.id);

    socket.on('setUsername', (username) => {
        if (!userColors[username]) {
            const availableColors = colors.filter(color => !Object.values(userColors).includes(color));
            if (availableColors.length > 0) {
                const assignedColor = availableColors[0];
                userColors[username] = assignedColor;
                userSockets[socket.id] = username;
                socket.emit('colorAssigned', assignedColor);
                io.emit('updateUsers', userColors);
            } else {
                socket.emit('colorAssigned', null);
            }
        } else {
            socket.emit('colorAssigned', userColors[username]);
        }
    });

    socket.on('updateCellState', (data) => {
        const { position, color } = data;
        cellStates[position] = color;
        io.emit('cellStateUpdated', data);
    });

     
     //socket.emit('chat', 'hello world');
     socket.on('chat', (arg) => {
        console.log('incoming chat', arg);
        io.emit('chat', arg);
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

   //current cell state when a new client connects    --> how to make it work?
   socket.emit('initialCellStates', cellStates);
});




server.listen(3000);