const mongoose = require('mongoose')
const { Schema } = mongoose

var demandSchema = new Schema({
  course: String,
  counter: { type: Number, default: 1 }
})
mongoose.model('demand', demandSchema)
