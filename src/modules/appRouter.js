const { Router } = require('express');

const projectsRouter = require('./projects/router');
const pagesRouter = require('./pages/router');
const syncRouter = require('./sync/router');

const baseRouter = Router();

baseRouter
  .use('/projects', projectsRouter)
  .use('/pages', pagesRouter)
  .use('/sync', syncRouter);

module.exports = baseRouter;
