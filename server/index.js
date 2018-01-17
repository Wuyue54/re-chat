const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.Server(app);
const io = socketIO(server);

app.set('port', process.env.PORT || 8080);

app.use(express.static(`${__dirname}/../build`));
app.get('/', (req, res) => {
  res.sendFile('/index.html');
});

// TODO: handle storage.
const users = [];

io.on('connection', (socket) => {
  socket.on('message', (message) => {
    const action = JSON.parse(message);
    switch (action.type) {
      case 'ADD_USER': {
        const { name, id } = action;
        users.push({ name, id });
        socket.send(JSON.stringify({
          type: 'USERS_LIST',
          users
        }));
        socket.broadcast.send(JSON.stringify({
          type: 'USERS_LIST',
          users
        }));
        break;
      }
      case 'ADD_MESSAGE': {
        socket.broadcast.send(JSON.stringify({
          type: 'ADD_MESSAGE',
          message: action.message,
          author: action.author,
          id: action.id
        }));
        break;
      }
      default: {
        break;
      }
    }
  });

  socket.on('disconnect', () => {
    const index = users.findIndex(user => user.id === socket.id);
    users.splice(index, 1);
    socket.broadcast.send(JSON.stringify({
      type: 'USERS_LIST',
      users
    }));
  });
});

server.listen(app.get('port'), () => {
  console.log('socket is listening on port: 8080');
});
