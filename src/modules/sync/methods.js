const { pagesModel } = require('../pages');
const { projectsModel } = require('../projects');

console.log('>>> syncMethods', !!pagesModel, !!projectsModel)

const syncProject = async (project) => {
  const data = await fetchProjectData(project, 'getproject');

  return data && projectsModel.findOneAndUpdate({ _id: project._id },
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

    return pagesModel.findOneAndUpdate({ pageid: page.pageid },
        { $set: data },
        {
          new: true,
          ...options,
        });
  }));
};

const syncPage = async (page) => {
  if (!page.sync) return;

  // eslint-disable-next-line no-underscore-dangle
  const project = await projectsModel.findOne({ _id: page._projectid });
  const data = await fetchPageData(page, 'getpage', project);

  // eslint-disable-next-line consistent-return
  return data && pagesModel.findOneAndUpdate({ _id: page._id },
      { $set: data },
      {
        new: true,
      });
};

const syncHook = async (data) => {
  console.log('>>> syncPage', data);
  const {
    pageid,
    projectid,
    // published,
    // publickey,
  } = data;

  const project = await projectsModel.findOne({ projectid });

  if (!project) return;
  await syncProject(project);

  const page = await pagesModel.findOne({ pageid });

  if (!page) {
    await syncProjectPageList(project);
  } else {
    await syncPage(page);
  }
};



module.exports = {
  syncHook,
};

