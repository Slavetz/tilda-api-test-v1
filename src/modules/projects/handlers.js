const { Projects } = require('../dataLayer');

const get = async (projectid) => Projects.findOne({ projectid });
const patch = async (projectid, data) => Projects.findOneAndUpdate(filter,
    { $set: data },
    {
      new: true,
    });

module.exports = {
  get,
  patch,
};

