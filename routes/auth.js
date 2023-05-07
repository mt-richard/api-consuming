const express = require('express')
const route = express.Router()

const login = require('../controller/login.js')
const signup = require('../controller/signup.js')

route.post('/login', login);
route.post('/signup', signup);

module.exports = route