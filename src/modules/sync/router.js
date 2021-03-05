const { Router } = require('express');

const SyncHandlers = require('./handlers');

const SyncRouter = Router();

SyncRouter.get('/', (req, res) => {
  SyncHandlers.get(req.query);
  res.send('ok');
});

module.exports = SyncRouter;
