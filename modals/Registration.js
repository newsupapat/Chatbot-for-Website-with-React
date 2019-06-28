const mongoose = require('mongoose')
const { Schema } = mongoose

var registration = new Schema({
  name: String,
  tel: Number
})
mongoose.model('registration', registration)
