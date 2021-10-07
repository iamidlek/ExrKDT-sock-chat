const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

const path = require('path');

const socketio = require('socket.io')

const io = socketio(server);
// socket.js에 연결
require("./socket")(io);

app.use((req, res, next) => {
  req.io = io;
  next()
})

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))

// static 파일 들을 담아두는 경로 지정
app.use("/public", express.static(__dirname + "/public"));

const indexRouter = require('./routes/index');
const clubsRouter = require('./routes/clubs')
const chatRouter = require('./routes/chat')

app.use('/', indexRouter);
app.use('/clubs', clubsRouter);
app.use('/chat', chatRouter)

server.listen(3000, () => {
  console.log('Express Server is now listening on localhost:3000..')
});
