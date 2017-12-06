
const express = require('express');
const app = express();

// this will serve the HTML file shown below
app.use(express.static('static'));
 
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/whatisnode', (req,res) => res.send('Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side'))

app.get('/express', (req, res) => res.send('Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.'))

app.get('sowhyuseit', (req, res) => res.send('Well Node is not allways the best but it is good!'))

app.use('/api', require('./api'));

// Start server
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
