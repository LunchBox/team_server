const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String
  },
  content: {
    required: true,
    type: String 
  },
  exp: {
    require: false,
    type: Boolean
  },
  seq: {
    require: false,
    type: Number,
    default: 0
  },
  parentId: {
    require: false,
    type: String
  },
  userId: {
    require: false,
    type: String
  },
})

module.exports = mongoose.model('Data', dataSchema)
