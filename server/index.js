const express = require('express'),
			app = express(),
			bodyParser = require('body-parser'),
			PORT = 3001,
			server = app.listen(PORT, () => {
				console.log(`server running on port ${PORT}`);
			}),
			io = require('socket.io')(server),			
			cors = require('cors')
			Rooms = ['Room1', 'Room2', 'Room3'];			
			
app.use(bodyParser.json(), bodyParser.urlencoded({extended:true}))
app.use(cors)

io.of('/pair').on('connection', (socket)=>{
	socket.on('joinRoom', (room)=>{
		if(Rooms.includes(room)){
			socket.join(room)
			console.log('success')
			return socket.emit('success', `Joined Room ${room}`)
		}else{
			console.log('failed')
			return socket.emit('err', `Room Not Found ${room}`)
		}
	})
	// socket.on('SEND_CODE', function(data){
	// 	let {code} = data
	// 	socket.emit('CODE', code)
	// })
})

// console.log(socket.id)
// 	socket.on('SEND_CODE', function(data) {		
// 		nsp.emit('CODE', data)
