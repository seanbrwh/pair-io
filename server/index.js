const express = require('express'),
			app = express(),
			bodyParser = require('body-parser'),
			PORT = 3001,
			server = app.listen(PORT, () => {
				console.log(`server running on port ${PORT}`);
			}),
			io = require('socket.io')(server)
			cors = require('cors');			
			
app.use(bodyParser.json(), bodyParser.urlencoded({extended:true}))

io.on('connection', (socket)=>{
	socket.on('SEND_CODE', function(data) {		
		io.emit('CODE', data)
});
})
