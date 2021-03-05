const { Router } = require('express');

const PagesHandlers = require('./handlers');

const PagesRouter = Router();

PagesRouter.get('/:pageid', (req, res) => {
  const filter = { pageid: req.params.pageid };

  PagesHandlers.get(filter).then((page) => {
    res.send(page);
  });
});

module.exports = PagesRouter;
