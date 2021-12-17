console.log('in server.js');

// load the express library
const express = require('express');

// load body-parser
const bodyParser = require('body-parser');

// create server app
const app = express();

// point express toward public files
app.use(express.static('server/public'));

 // body-parser setup
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));


// create global array to store data
 let calculations = [{}];


 // listen for requests (GET)
 app.get('/calculator', (req, res) => {
     console.log('in GET /calculator');
     res.send(calculations);
 });

 // send back data (POST)
 app.post('/calculator', (req, res) => {
     console.log('in POST /calculator', req.body);

     calculations.push(req.body);

     res.sendStatus(201);
 });

  // listen on port 5000
  const port = 5000;
  app.listen(port, () => {
      console.log('listening');
  });
