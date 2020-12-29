const express =require('express');
const socketio=require('socket.io');
const http=require('http');
const PORT =process.env.port || 5000;
const app = express();

//calling the router.js miniapp
const router=require('./router');

//creating the server to http on the backend and passing the app to it
const server= http.createServer(app);
const io = socketio(server);

// to notify when there is a new conenction
io.on('connection', (socket)=>{
	console.log(`we have a new connection!`);

	socket.on('disconnect', ()=>{
		console.log(`user has left!`);
	});
});


//we have passed the miniapp of router to our main app
app.use(router);
server.listen(PORT, () => console.log(`server has started on port ${PORT}`));

