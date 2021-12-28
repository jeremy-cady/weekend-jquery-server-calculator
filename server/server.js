console.log('in server.js');

// load the express library
const express = require('express');

// load body-parser
const bodyParser = require('body-parser');

// create server app
const app = express();

// create variable for port 5000
const port = 5000;

// body-parser setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// point express toward public files
app.use(express.static('server/public'));


 // create global array to store data
let calculationsArray = [];


 // listen for requests (GET)
 app.get('/calculator', (req, res) => {
     console.log('in GET /calculator');
     res.send(calculationsArray);
 });

 // send back data (POST)
 app.post('/calculator', (req, res) => {
    console.log('in POST /calculator', req.body);

    // Maths
    let operator = req.body.operator;
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let result = 0;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
    }
    console.log('result is:', result);

    // store result in an object
    const calculation =  {
        num1: num1,
        num2: num2,
        operator: operator,
        result: result
    }

    calculationsArray.push(calculation);
    console.log(calculationsArray);
    
    // send code CREATED
    res.sendStatus(201);
 });


  // listen on port 5000
  app.listen(port, () => {
      console.log('listening');
  });
