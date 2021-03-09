const { Router } = require('express');

const SyncHandlers = require('./handlers');

const SyncRouter = Router();

SyncRouter.get('/', SyncHandlers.get);

module.exports = SyncRouter;
