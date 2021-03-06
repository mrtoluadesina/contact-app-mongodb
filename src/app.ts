import createError from 'http-errors';
import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';

import indexRouter from './routes/index';
import contactsRouter from './routes/contacts';

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/contacts', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
  console.log('MongoDB database connection established successfully');
})

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);
app.use('/api/', contactsRouter);

// catch 404 and forward to error handler
app.use(function(_req, _res, next) {
  next(createError(404));
});

// error handler
app.use(function(err: any, req: Request, res: Response, _next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
