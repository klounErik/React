const express = require('express')
const router = express.Router()
const Song = require('./songModel')

router.get('/songs', function(req, res, next) {
  Song.find({}).then(function(songs) {
    res.send(songs)
  })
})

router.post('/songs', function(req, res, next) {
  Song.create(req.body)
    .then(function(song) {
      res.send(song)
    })
    .catch(next)
})

router.put('/songs/:id', function(req, res, next) {})

router.delete('/songs/:id', function(req, res, next) {
  Song.findByIdAndRemove({_id: req.params.id})
    .then(function(song) {
      res.send(song)
    })
    .catch(next)
})

module.exports = router
