const express = require('express');
const api = express.Router();
module.exports = api;

api.use('/js', require('./js'));

api.get('/', (req, res) => {res.send('an api endpoint')});

