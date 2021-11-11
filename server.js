const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

let players = [];
let clients = [];

io.on('connection', (socket) => {
  clients.push(socket);

  console.log('New connection !');

  socket.on('new-player', player => {
    players.push(player);
    console.log(socket.id)
  });

  socket.on('update-player', player => {
    
  })

  socket.on('disconnect', user => {
    let handler = clients.find(sockets => sockets === socket);
    console.log(handler.id);
  });
});

http.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}/`);
});