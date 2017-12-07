const express = require('express');
const js = express.Router();
module.exports = js;

js.get('/find', (req, res) => {
		res.send('Find is realy just syntactical sugar like many things in js you could use a for loop but this is just cleaner. code demo insues')
	});
