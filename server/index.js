const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const logger = require('./middleware/logger');

mongoose.connect('mongodb+srv://morgankaehr:zekrom644@cluster0-sepke.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected to mongoDB");
});

const app = express();

//app.use(logger);

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Post api routes
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));