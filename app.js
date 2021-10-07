const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

const path = require('path');
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))

// static 파일 들을 담아두는 경로 지정
app.use("/public", express.static(__dirname + "/public"));

const indexRouter = require('./routes/index');
const clubsRouter = require('./routes/clubs')

app.use('/', indexRouter);
app.use('/clubs', clubsRouter);

server.listen(3000, () => {
  console.log('Express Server is now listening on localhost:3000..')
});
