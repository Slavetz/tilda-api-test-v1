const { Projects, Pages } = require('../dataLayer');

const { fetchDataFromTilda } = require('../../services/tilda');

const fetchProjectData = async (project, type) => {
  const {
    publickey,
    secretkey,
    projectid,
  } = project;

  const params = {
    publickey,
    secretkey,
    projectid,
  };

  return fetchDataFromTilda(type, params);
};

const syncProjectData = async (project) => {
  const data = await fetchProjectData(project, 'getproject');

  return data && Projects.findOneAndUpdate({ _id: project._id },
      { $set: data },
      {
        new: true,
      });
};

const syncProjectPageList = async (project) => {
  const pagesList = await fetchProjectData(project, 'getpageslist');

  const options = {
    upsert: true,
    setDefaultsOnInsert: true,
  };

  return pagesList && Promise.all(pagesList.map((page) => {
    const data = { ...page, _projectid: project._id };

    return Pages.findOneAndUpdate({ pageid: page.pageid },
        { $set: data },
        {
          new: true,
          ...options,
        });
  }));
};

module.exports = {
  syncProjectData,
  syncProjectPageList,
};

