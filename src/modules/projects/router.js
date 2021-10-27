const { Router } = require('express');

const ProjectsHandlers = require('./handlers');

const ProjectsRouter = Router();

ProjectsRouter.get('/:projectid', ProjectsHandlers.get);

module.exports = ProjectsRouter;
