const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const { connect } = require("http2");
app.use(cors());
const server = http.createServer(app);
//conncect express with socket io server
const io = new Server(server, {
  cors: {
    orgin: "http://localhost:3000",
    methods: ["GET", "POST"],
    //ok to comuniccate with this url
  },
});
//emit events
io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("disconnect", () => console.log("disconncet"));
}); //events with with id
server.listen(3001, () => {
  console.log("server");
});
