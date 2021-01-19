import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

export default app => {
  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(express.static('public'));
}