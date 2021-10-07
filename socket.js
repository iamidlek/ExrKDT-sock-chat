const { Socket } = require("socket.io")

// app.js에 넘겨줄 내용
module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('A user is now connected')
  })
}
