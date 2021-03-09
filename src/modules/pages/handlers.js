const PagesMethods = require('./methods');

const get = async (req, res) => {
  const {
    params: { pageid },
    query: { extend = false },
  } = req;

  const page = await PagesMethods.getPage(pageid, extend);

  res.send(page);
};

module.exports = {
  get,
};

