const { urlencoded } = require('express')
const colors = require('colors')
const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const { use } = require('./routes/goalRoutes')
const port = process.env.PORT || 6000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(express.urlencoded({extended: false}))

app.use ('/api/goals', require('./routes/goalRoutes'))
app.use ('/api/users', require('./routes/userRouter'))
app.use(errorHandler)

app.listen(port, ()=> {console.log(`Server started on port ${port}`)})
