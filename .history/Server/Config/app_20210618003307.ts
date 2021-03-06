import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import mongoose from 'mongoose';

//modules for authentication
import session from 'express-session'




//attach router files
import indexRouter from '../Routes/index';
import contactRouter from '../Routes/contact';

//App configuration
const app = express();
export default app;            //exports app as default object


//DB CONFIGURATION

import * as DBConfig from './db'
mongoose.connect(DBConfig.LocalURI, { useNewUrlParser: true, useUnifiedTopology: true })


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function () {
  console.log(`Connected to MongoDB at:  ${DBConfig.HostName} `);
});
// view engine setup
app.set('views', path.join(__dirname, '../Views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../Client')));
app.use(express.static(path.join(__dirname, "../../node_modules")));

//Routing happens
app.use('/', indexRouter);
//defines new area of our website called contact-list
app.use('/contact-list', contactRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err:createError.HttpError, req:express.Request, res:express.Response, next:express.NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//module.exports = app;
