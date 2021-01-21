import indexRouter from './routes/indexRouter.js';
import loginRouter from './routes/loginRouter.js';
import registerRouter from './routes/registerRouter.js';
import postsRouter from './routes/postsRouter.js';
import authorsRouter from './routes/authorsRouter.js';
import pagesRouter from './routes/pagesRouter.js';
import categoriesRouter from './routes/categoriesRouter.js';

export default app => {

  app.use('/', indexRouter);

  app.use('/api/login', loginRouter);
  app.use('/api/register', registerRouter);

  app.use('/api/posts', postsRouter);
  app.use('/api/authors', authorsRouter);
  app.use('/api/pages', pagesRouter);
  app.use('/api/categories', categoriesRouter);
}