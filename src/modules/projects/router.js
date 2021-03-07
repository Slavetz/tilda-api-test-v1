const { Router } = require('express');

const ProjectsHandlers = require('./handlers');

const ProjectsRouter = Router();

ProjectsRouter.get('/:projectid', (req, res) => {
  ProjectsHandlers.get(req.params.projectid).then((project) => {
    res.send(project);
  });
});

module.exports = ProjectsRouter;
