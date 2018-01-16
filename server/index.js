const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.send('hi');
});

let users = [];

io.on('connection', (socket) => {
  socket.on('message', (message) => {
    const action = JSON.parse(message);
    console.log(action);
    switch (action.type) {
      case 'ADD_USER': {
        const index = users.length;
        users.push({ name: action.name, id: index + 1 });
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
        console.log('bc');
        socket.broadcast.send(JSON.stringify({
          type: 'ADD_MESSAGE',
          message: action.message,
          author: action.author
        }));
        break;
      }
      default: {
        break;
      }
    }
  });
});

io.on('close', () => {
  console.log('asdf');
});

http.listen(8080, () => {
  console.log('listening on *: 8080');
});
