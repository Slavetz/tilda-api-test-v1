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

  return data && Projects.Update({ _id: project._id }, data);
};

const syncProjectPageList = async (project) => {
  const data = await fetchProjectData(project, 'getpageslist');

  const options = {
    upsert: true,
    setDefaultsOnInsert: true,
  };

  return data && Promise.all(data.map((page) => {
    const filter = { pageid: page.pageid };
    const pageData = { ...page, _projectid: project._id };

    return Pages.Update(filter, pageData, options);
  }));
};

module.exports = {
  syncProjectData,
  syncProjectPageList,
};

