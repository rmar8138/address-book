const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const contacts = require('./routes/api/contacts');

const app = express();

// Bodyparser middleware
app.use(bodyParser.json());

// Store DB key from config file to db variable
const db = require('./config/keys').mongoURI;

// Connect to Mongo by passing in key
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

// Use Routes
// Any request that goes through /api/contacts will go through the contacts routes as defined above
app.use('/api/contacts', contacts);

// Set port to environment variable for heroku to use, or use localhost 5000
const port = process.env.PORT || 7000;

app.listen(port, () => console.log(`Server started on port ${port}`));
