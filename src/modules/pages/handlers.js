const { Pages } = require('../dataLayer');

const get = async (filter) => Pages.Read(filter);
const patch = async (filter, data) => Pages.Update(filter, data);

module.exports = {
  get,
  patch,
};

