import { WebSocketServer } from "ws"
import http from "http"


// Create a WebSocket server instance
const port = 8000;
const server = http.createServer()
const wss = new WebSocketServer({ server })

// Start HTTP server
server.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

// Triggers upon client connection
wss.on('connection', (ws) => {
    console.log('Client connected');

    // Listen for messages from the client
    ws.on('message', (message) => {
        console.log(`Received message => ${message}`);

        // Echo the received message back to the client
        ws.send(`Server heard: ${message}`);
    });

    // Close the connection when the client disconnects
    ws.on('close', () => {
        console.log('Client disconnected');
    });
});