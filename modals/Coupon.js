const mongoose = require('mongoose')
const { Schema } = mongoose

var Coupon = new Schema({
  course: String,
  link: String
})
mongoose.model('coupon', Coupon)
