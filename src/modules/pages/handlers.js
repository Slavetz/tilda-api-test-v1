const pagesMethods = require('./methods');
const { projectsMethods } = require('../projects');
const { syncMethods } = require('../sync');

console.log('>>> PagesHandler', !!pagesMethods, !!syncMethods, !!projectsMethods);


const get = async (req, res) => {
  const {
    params: { pageid },
    query: { extend = false },
  } = req;

  const page = await pagesMethods.getPage(pageid, extend);

  res.send(page);
};

module.exports = {
  get,
};

