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

var users = [
  {
    username: 'Jaska',
    password: 'Jaska',
  }
]

/**
 * Gets the current posts from datababe
 */
app.get('/posts', function (req, res) {
  res.send(data)
})

/**
 * Gets comments pased on id
 */
app.get('/posts/:id([0-9]+)', function (req, res) {
  res.send(comments[req.params.id])
})

/**
 * Gets profile passed on username
 */
app.get('/profile/:username(*)', function (req, res) {
  let profile = null;
  for(let item of users) {
    if(item.username === req.params.username) {
      profile = item
    }
  }
  res.send(profile)
})

/**
 * Gets the lenght of the data array
 */
app.get('/posts/last', function (req, res) {
  var msg = {
    lenght: data.length
  }
  res.send(msg)
})

/**
 * Sends the new post to database and respoces with the given body
 */
app.post('/posts', function (req, res) {
  data.push(req.body)
  res.send(req.body)
})

/**
 * Adds new comment to a post pased on id
 */
app.post('/posts/:id([0-9]+)', function (req, res) {
  for(let item in comments) {
    if(comments[item].id === req.body.id) {
      comments[item].comments.push(req.body.text)
    }
  }
  
  res.send(req.body)
})

/**
 * Login validation
 */
app.post('/login', function (req, res) {
  let result = false
  for(let item of users) {
    if(item.username === req.body.username && item.password === req.body.password) {
      result = true
    }
  }
  res.send(result)
})

/**
 * Registeration validation
 */
app.post('/register', function (req, res) {
  users.push(req.body)
  res.send(true)
})

/**
 * Changes password
 */
app.post('/profile/:username(*)', function (req, res) {
  console.log(req.params)
  let profile = null;
  for(let item of users) {
    if(item.username === req.params.username) {
      item.password = req.body.password
      profile = item
    }
  }
  console.log(users)
  res.send(profile)
})

/**
 * starts the server
 */
var server = app.listen(3000, function () {
  console.log('Server listening in http://localhost:3000/')
})