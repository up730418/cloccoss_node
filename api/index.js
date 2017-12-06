const express = require('express');
const api = express();

api.use('/js', require('./js'));