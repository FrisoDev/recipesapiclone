const http = require('http')
const socketAuth = require('./config/socket-auth')
const socketIO = require('socket.io')

const port = process.env.PORT || 3030

const app = express()
const server = http.Server(app)
const io = socketIO(server)

// using auth middleware
io.use(socketAuth);

io.on('connect', socket => {
  socket.emit('ping', `Welcome to the server, ${socket.request.user.name}`)
  console.log(`${socket.request.user.name} connected to the server`)
})
