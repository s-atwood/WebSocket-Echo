# WebSocket-Echo

<p>This app uses a vite React project for the frontend and a Node.js server for the backend.
To use the app, simply type a message in the text field and submit it. This will
send the messge to the server which will then send the message back and be displayed
as a browser alert.</P>

<p>To set up project:</p>
<ul>
    <li><code>cd server</code></li> to change into server directory
    <li><code>npm install</code> to install "ws" dependency</li>
    <li><code>node server.js</code> to start backend server</li>
    <li><code>cd ../client</code> to switch to client directory</li>
    <li><code>npm run dev</code> to start client server</li>
    <li>Open <code>localhost:5173</code> in browser</li>
</ul>