const mongoose = require('mongoose')
const Schema = mongoose.Schema

const songSchema = new Schema({
  title: {
    type: String,
    required: [true, 'title is required'],
  },
  artist: {
    type: String,
    required: [true, 'artist is required'],
  },
  year: {
    type: String,
    required: [true, 'year is required'],
  },
})

const Song = mongoose.model('song', songSchema)

module.exports = Song
