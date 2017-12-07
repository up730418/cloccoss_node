const express = require('express');
const api = express.Router();
module.exports = api;

api.use('/js', require('./js'));

api.get('/', (req, res) => {res.send('an api endpoint')});

api.post('/', (req, res) => {res.send('an post api endpoint')});
api.put('/', (req, res) => {res.send('an put api endpoint')});
api.delete('/', (req, res) => {res.send('an delete api endpoint')});


