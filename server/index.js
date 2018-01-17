const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.send('hi');
});

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

http.listen(8080, () => {
  console.log('socket is listening on port: 8080');
});
