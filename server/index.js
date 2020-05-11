const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
var cors = require('cors');
const logger = require('./middleware/logger');

mongoose.connect('mongodb+srv://morgankaehr:zekrom644@cluster0-sepke.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected to mongoDB");
});

const app = express(cors());

const isPreflight = (req) => {
  return (
    req.method === 'OPTIONS' &&
    req.headers['origin'] &&
    req.headers['access-control-request-method']
  )
}

//app.use(logger);

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

/* Access Headers */
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Authorization, token, Origin, X-Requested-With, Content-Type, Accept, receiver");
    res.header("Access-Control-Expose-Headers", "token");
    res.header('Access-Control-Allow-Credentials', 'true');

    if (isPreflight(req)) {
      res.set('Access-Control-Allow-Methods', 'PUT, DELETE');
      res.status(204).end();
      return;
    }

    next();
});

// api routes
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/users', require('./routes/api/users'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));