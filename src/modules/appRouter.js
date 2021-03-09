const { Router } = require('express');

const baseRouter = Router();

const projectsRouter = require('./projects/router');
const syncRouter = require('./sync/router');
const pagesRouter = require('./pages/router');

baseRouter
  .use('/projects', projectsRouter)
  .use('/pages', pagesRouter)
  .use('/sync', syncRouter);

module.exports = baseRouter;
