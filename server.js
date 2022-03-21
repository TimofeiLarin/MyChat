const express = require('express');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server, {
  cors: {
    origin: "*",
  },
});

const rooms = new Map([
  ['rooms', [1,2,3]],
  ['messages', []]
]);

app.get('/rooms', (req, res) => {
  res.json(rooms);
});

io.on('connection', socket => {
  console.log('socket connect', socket.id);
});

server.listen(8888, (err) => {
  if (err) {
    throw Error(err);
  }
  console.log('server start')
} );