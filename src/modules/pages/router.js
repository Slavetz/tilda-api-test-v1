const { Router } = require('express');

const PagesHandlers = require('./handlers');

const PagesRouter = Router();

PagesRouter.get('/:pageid', (req, res) => {
  PagesHandlers.get(req.params.pageid, req.query).then((page) => {
    res.send(page);
  });
});

module.exports = PagesRouter;
