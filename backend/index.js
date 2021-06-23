const app = require("express")();
const http = require("http").createServer(app);
const PORT = 8080;

// call socket.io library and add cors option where origin is the frontend ip address and port
const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

// start the server
http.listen(PORT, () => {
  console.log(`listening on 127.0.0.1:${PORT}`);
});

// To initialize socket connection 8080 -> send-message
io.on("connection", (socket) => {
  // Sends connection to client
  socket.emit("message", { msg: "hello from the other side"});
});
