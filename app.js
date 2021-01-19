import express from 'express';
import http from 'http';
import initializeMiddlewares from './middlewares.js';
import initializeRoutes from './routes.js';

const port = process.env.PORT || '3000';
const app = express();
const server = http.createServer(app);

app.set('port', port);

/* Initialize */
initializeMiddlewares(app);
initializeRoutes(app);

/* Not found route */
app.use((req, res, next) => {
  return next({ statusCode: 404, message: 'Böyle bir yol bulunamadı!' });
});

/* Error handling */
app.use((err, req, res, next) => {
  return res.status(err.statusCode).send(err);
});

/* listen port */
server.listen(port);
server.on('error', err => {
  throw console.log(err);
});
server.on('listening', () => {
  return console.log(`${port} listening`);
});
