import mongoose from 'mongoose';

export default () => {

  /* Db connect */
  mongoose.connect('mongodb://localhost:2s7017/blog-api', { useNewUrlParser: true, useUnifiedTopology: true });

  /* Connection success */
  mongoose.connection.on('open', err => {
    return console.log('mongoDB connection success');
  });

  /* Error handling */
  mongoose.connection.on('error', err => {
    throw err;
  });

}