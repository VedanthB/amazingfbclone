const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')

require('dotenv').config

//* Initializing 'app' which will act as a server
const app = express()

app.use(express.json())
app.use(cors({ credentials: true, origin: "http://localhost:3000" }))
app.use(cookieParser())

const authRouter = app.use('/api/auth',require('./Routes/auth.routes'))

const PORT = 5000
app.listen(PORT, () => {
  console.log(`SERVER IS UP AND RUNNING, IT IS CURRENTLY LISTENING TO PORT ${PORT}`)
})