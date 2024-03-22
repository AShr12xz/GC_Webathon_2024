const express = require('express');
const morgan = require('morgan');

const app = express();

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use((req, res, next) => {
  console.log('Hello');
  next();
});

app.get('/', (req, res) => {
  res.send({ message: "Welcome to the API" });
});

// 2) ROUTES

module.exports = app;
