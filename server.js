const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

mongoose.connect('mongodb://localhost/songs')
mongoose.Promise = global.Promise

app.use(cors())

app.use(bodyParser.json())

app.use('/api', require('./api'))

app.listen(process.env.port || 4000, function() {
  console.log('Listening on port 4000')
})
