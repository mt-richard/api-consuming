const express = require('express')
const route = express.Router()

const destroy = require('../controller/destroy.js')
const getParticipants = require('../controller/getParticipants.js')

route.get('/', getParticipants);
route.delete('/delete/:id', destroy);

module.exports = route