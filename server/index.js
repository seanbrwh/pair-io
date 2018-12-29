const express = require('express'),
			app = express(),
			bodyParser = require('body-parser'),
			PORT = 3001,
			server = app.listen(PORT, () => {
				console.log(`server running on port ${PORT}`);
			}),
			io = require('socket.io')(server);			
			
app.use(bodyParser.json(), bodyParser.urlencoded({extended:true}))

io.on('connection', (socket)=>{
	console.log(socket.id)
	socket.on('SEND_MESSAGE', function(data) {		
		io.emit('MESSAGE', data)
});
})
