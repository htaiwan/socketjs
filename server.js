var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

io.on('connection', function (socket) {
	console.log('User connected via socket.io!');

	socket.on('message', function (message) {
		console.log('收到訊息: ' + message.text);

		// server會將訊息傳送給每個人
		io.emit('message', message); 

		// server會將訊息傳給除了自己以外的每個人
		// socket.broadcast.emit('message', message); 
	});

	socket.emit('message', {
		text: '歡迎光臨聊天室'
	});
});

http.listen(PORT, function () {
	console.log('Server started');
});