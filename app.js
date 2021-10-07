const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

const indexRouter = require('./routes/index');
const clubsRouter = require('./routes/clubs')

app.use('/', indexRouter);
app.use('/clubs', clubsRouter);

server.listen(3000, () => {
  console.log('Express Server is now listening on localhost:3000..')
});
