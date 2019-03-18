const express = require('express');
const app = express();


const AnalyticObserver = function (req, res, next) {
 
  /**
   * Do some work to get some informaiton about the client
   * */
  next();
}

app.use(AnalyticObserver)


app.use()