const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const config = require('./config/keys')
const mongoose = require('mongoose')
app.use(bodyParser.json())

require('./modals/Registration')
require('./modals/Demand')
require('./modals/Coupon')

require('./routes/dialogFlowRoutes')(app)
require('./routes/fullfillmentRoutes')(app)

// connect mongoose

mongoose.connect(
  config.mongoURI,
  { useNewUrlParser: true }
)

const PORT = process.env.PORT || 5000
app.listen(PORT)