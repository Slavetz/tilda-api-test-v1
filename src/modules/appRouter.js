const { Router } = require('express');

const { projectsRouter } = require('./projects');
const { pagesRouter } = require('./pages');
const { syncRouter } = require('./sync');

const baseRouter = Router();

baseRouter
  .use('/projects', projectsRouter)
  .use('/pages', pagesRouter)
  .use('/sync', syncRouter);

module.exports = baseRouter;
