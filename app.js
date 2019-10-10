let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let mongoose = require('mongoose');
let passport = require('passport');
let cors = require('cors');

let auth = require('./server/routes/auth.route');
let category = require('./server/routes/category');
let post = require('./server/routes/post.route');

mongoose.connect('mongodb://localhost/travel', {
    promiseLibrary: require('bluebird'),
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() =>  console.log('connection successful'))
  .catch((err) => console.error(err));

let indexRouter = require('./server/routes/index');
let usersRouter = require('./server/routes/user.route');

let app = express();

app.use(cors())
app.use(passport.initialize());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/auth', auth);
app.use('/api/category', category);
app.use('/api/post', post);
app.use('/api/public', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
