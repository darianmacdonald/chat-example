var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname +'/index.html');
});
//SWITCHED sendfile to sendFile -- seemed to fix error-//

io.on('connection', function(socket){
  console.log('a user connected');
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
});


http.listen(80, function(){
console.log('listening on *:80');
});