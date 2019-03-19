const express = require('express');
const app = express();


// example of open and close principle in NodeJS
const AnalyticObserver = function (req, res, next) { 
  /**
   * Do some work to get some informaiton about the client
   * */
  next();
}
app.use(AnalyticObserver);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



