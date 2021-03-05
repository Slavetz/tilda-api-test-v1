const { Projects } = require('../dataLayer');

const get = async (filter) => Projects.Read(filter);
const patch = async (filter, data) => Projects.Update(filter, data);

module.exports = {
  get,
  patch,
};

