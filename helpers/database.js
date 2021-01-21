import mongoose from 'mongoose';

export default () => {

  /* Db connect */
  mongoose.connect('mongodb://localhost:27017/blog-api', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

  /* Connection success */
  mongoose.connection.on('open', err => {
    return console.log('mongoDB connection success');
  });

  /* Error handling */
  mongoose.connection.on('error', err => {
    throw err;
  });

}