const { Socket } = require("socket.io")

// app.js에 넘겨줄 내용
module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('A user is now connected')
    socket.on('chat message', (msg) => {
      console.log("message: ", msg)
    })
    socket.on('disconnect', () => {
      console.log('disconnected')
    })
  })
}
