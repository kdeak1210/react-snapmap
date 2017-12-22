const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const mongoose = require('mongoose')
require('dotenv').config()

const index = require('./routes/index')
const api = require('./routes/api')
const account = require('./routes/account')

const app = express()

// Connect to MongoDB via mongoose
mongoose.connect(process.env.MONGO_URL, {useMongoClient: true}, (err) => {
  if (err){
    console.log('Failure to connect to MongoDB')
  } else {
    console.log('Successfully connected to MongoDB')  
  }
})

// Apply some middleware
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// Handlebars Templating Engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// Routes
app.use('/', index)
app.use('/api', api)
app.use('/account', account)

// Spin up the server
const port = process.env.port || 3000
app.listen(port, (err) => {
  if (err){
    console.log(`Error while trying to connect to port ${port}`)
    return
  }

  console.log(`Server started on port ${port}`)
})