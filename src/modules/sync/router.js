const { Router } = require('express');

const SyncHandlers = require('./handlers');

const SyncRouter = Router();

SyncRouter.get('/hook', SyncHandlers.hook);

module.exports = SyncRouter;
