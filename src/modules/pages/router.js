const { Router } = require('express');

const PagesHandlers = require('./handlers');

const PagesRouter = Router();

PagesRouter.get('/:pageid', PagesHandlers.get);

module.exports = PagesRouter;
