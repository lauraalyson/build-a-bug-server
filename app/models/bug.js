const mongoose = require('mongoose')

const bugSchema = new mongoose.Schema({
  image: {
    type: String,
    default: 'https://i.imgur.com/7xTr4CO.gif'
  },
  name: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true
  },
  favErrorCode: {
    type: String,
    required: true
  },
  bugsLifeCharacter: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Bug', bugSchema)
