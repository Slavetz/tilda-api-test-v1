const syncMethods = require('./methods');
const { pagesMethods } = require('../pages');
const { projectsMethods } = require('../projects');

console.log('>>> SyncHandler', !!pagesMethods, !!syncMethods, !!projectsMethods);

const hook = (req, res) => {
  const { query } = req;
  syncMethods.syncHook(query);
  res.send('ok');
};

module.exports = {
  hook,
};
