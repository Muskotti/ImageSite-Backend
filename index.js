'use strict'
var express = require('express')
var cors = require('cors');
var app = express()
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(cors());

// ToDo: make proper database
var data = [
  {
    id: 0,
    title: 'asd',
    poster: 'asd',
    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    likes: 100,
    text: 'Lorem anim cillum ut qui labore anim in culpa ullamco ad eu anim ullamco laboris.',
  },

  {
    id: 1,
    title: 'qwe',
    poster: 'qwe',
    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    likes: 12,
    text: 'Voluptate irure minim quis deserunt. Anim laboris ea consequat est id commodo laborum.',
  },
]

var comments = [
  {
    id: 0,
    comments: ['Aliqua Lorem id enim non sint cillum nisi et aliqua ipsum anim ad eiusmod et.', 'Nisi officia laborum aute cillum eiusmod magna et quis reprehenderit aliqua magna voluptate deserunt.'],
  },
  {
    id: 1,
    comments: ['Velit est eu labore cillum est officia consequat fugiat fugiat magna do fugiat.', 'Cillum fugiat adipisicing voluptate duis aute ut do do sit.'],
  }
]

/**
 * Gets the current posts from datababe
 */
app.get('/posts', function (req, res) {
  res.send(data)
})

// ToDo: get comments pased on id
app.get('/posts/0', function (req, res) {
  res.send(comments[0])
})

/**
 * Sends the new post to database and respoces with the given body
 */
app.post('/posts', function (req, res) {
  data.push(req.body)
  res.send(req.body)
})

// ToDo: add comments pased on id
app.post('/posts/0', function (req, res) {
  console.log(req.body)
  for(let item in comments) {
    console.log(comments[item].id)
    if(comments[item].id === req.body.id) {
      console.log('toimi')
      comments[item].comments.push(req.body.text)
    }
  }
  
  res.send(req.body)
})

/**
 * starts the server
 */
var server = app.listen(3000, function () {
  console.log('Server listening in http://localhost:3000/')
})