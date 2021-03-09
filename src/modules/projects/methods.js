const model = require('../pages/model');

const Projects = { model };

const Pages = require('../pages');

console.log('>>> ProjectsMethods', 'Pages:', Pages, 'Projects:', !!Projects.model);

const { fetchProjectData } = require('../../services/tilda');

const getProject = async (projectid) => Projects.model.findOne({ projectid });

const syncProjectData = async (project) => {
  const data = await fetchProjectData(project, 'getproject');

  return data && Projects.model.findOneAndUpdate({ _id: project._id },
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

    return Pages.model.findOneAndUpdate({ pageid: page.pageid },
      { $set: data },
      {
        new: true,
        ...options,
      });
  }));
};

module.exports = {
  getProject,
  syncProjectData,
  syncProjectPageList,
};

