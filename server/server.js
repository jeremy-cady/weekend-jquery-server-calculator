console.log('in server.js');

// load the express library
const express = require('express');

// load body-parser
const bodyParser = require('body-parser');
const { setgroups } = require('process');

// create server app
const app = express();

// create global array to store data
 let calcArray = [];

 // point express toward public files
 app.use(express.static('server/public'));

 // body-parser setup
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));










 // listen on port 5000
 const port = 5000;
 app.listen(port, () => {
     console.log('listening');
 });
