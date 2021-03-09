const { Projects, Pages } = require('../dataLayer');

const { fetchDataFromTilda } = require('../../services/tilda');

const fetchPageData = async (page, type) => {
  // eslint-disable-next-line no-underscore-dangle
  const project = await Projects.findOne({ _id: page._projectid });

  const {
    publickey,
    secretkey,
  } = project;

  const {
    pageid,
  } = page;

  const params = {
    publickey,
    secretkey,
    pageid,
  };

  return fetchDataFromTilda(type, params);
};

const syncPageData = async (page) => {
  if (!page.sync) return;

  const data = await fetchPageData(page, 'getpage');

  // eslint-disable-next-line consistent-return
  return data && Pages.findOneAndUpdate({ _id: page._id },
      { $set: data },
      {
        new: true,
      });
};

module.exports = {
  syncPageData,
};

