const WebSocketServer = require('ws').Server;

const wss = new WebSocketServer({port:  9090});


wss.on('connection', (connection) => {
	// connection.send(JSON.stringify(messages)); // This sends stored messages to new client

	connection.on('message', (message) => {
		wss.clients.forEach((client) => {
				client.send(message);
		})
	});

	connection.on('close', (connection) => {
	});
});


// wss.on('connection', (connection) => {
// 	console.log('user connected');
//
// 	connection.on('message', (message) => {
// 		let data;
// 		console.log('Got message: ', message);
//
// 		try {
// 			data = JSON.parse(message);
// 		} catch (e) {
// 			console.log('Invalid JSON');
// 			data = {};
// 		}
//
// 		// Check the negative case first; change order
// 		if (data.type === 'login') {
// 			console.log('User logged:', data.name);
// 			if (users[data.name]) {
// 				sendTo(connection, {
// 					type: 'login',
// 					success: false
// 				});
// 			} else {
// 				users[data.name] = connection;
// 				connection.name = data.name;
//
// 				sendTo(connection, {
// 					type: 'login',
// 					success: true
// 				});
// 			}
// 		} else {
// 			sendTo(connection, {
// 				type: 'error',
// 				message: 'Command not found: ' + data.type
// 			});
// 		}
// 	});
//
// 	connection.on('close', () => {
// 		if (connection.name) {
// 			delete users[connection.name];
// 		}
// 		console.log('closed');
// 	});
//
// 	connection.send('Hi from server');
// });
