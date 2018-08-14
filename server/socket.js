// TODO: handle storage.
const users = [];

const socketHandler = (socket) => {
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
      case 'MESSAGE_FROM_CLIENT': {
        socket.broadcast.send(JSON.stringify({
          type: 'MESSAGE_FROM_SERVER',
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
};

module.exports = socketHandler;
