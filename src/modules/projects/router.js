const { Router } = require('express');

const ProjectsHandlers = require('./handlers');

const ProjectsRouter = Router();

ProjectsRouter.get('/:projectid', (req, res) => {
  const filter = { projectid: req.params.projectid };

  ProjectsHandlers.get(filter).then((project) => {
    res.send(project);
  });
});

module.exports = ProjectsRouter;
