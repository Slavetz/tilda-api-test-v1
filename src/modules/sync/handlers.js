const SyncMethods = require('./methods');

const get = (req, res) => {
  const { params: { pageid } } = req;

  SyncMethods.syncPage(pageid);
  res.send('ok');
};

module.exports = {
  get,
};
