const { Projects } = require('../dataLayer');

const get = async (projectid) => Projects.Read({ projectid });
const patch = async (projectid, data) => Projects.Update({ projectid }, data);

module.exports = {
  get,
  patch,
};

