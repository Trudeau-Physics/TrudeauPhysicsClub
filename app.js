let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let app = express();
let cors = require("cors");

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({ origin: '*' }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index/index'));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status(404).send("what are you doing with your life");
});

module.exports = app;
