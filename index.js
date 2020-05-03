'use strict'
var express = require('express')
var app = express()

var data = [
  {
    title: 'asd',
    poster: 'asd',
    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    likes: 100,
    text: 'Lorem anim cillum ut qui labore anim in culpa ullamco ad eu anim ullamco laboris.',
  },

  {
    title: 'qwe',
    poster: 'qwe',
    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    likes: 12,
    text: 'Voluptate irure minim quis deserunt. Anim laboris ea consequat est id commodo laborum.',
  },
]

app.get('/posts', function (req, res) {
  res.send(data)
})

app.post('/posts', function (req, res) {
  res.send('Hello World\n')
})

var server = app.listen(3000, function () {
  console.log('Server listening in http://localhost:3000/')
})