const syncMethods = require('./methods');
const { pagesMethods } = require('../pages');
const { projectsMethods } = require('../projects');

console.log('>>> SyncHandler', !!pagesMethods, !!syncMethods, !!projectsMethods);

const hook = (req, res) => {
  const { params: { pageid } } = req;

  syncMethods.syncHook(pageid);
  res.send('ok');
};

module.exports = {
  hook,
};
