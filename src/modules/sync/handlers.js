/* eslint-disable no-unused-vars  */
const { Projects, Pages } = require('../dataLayer');
const { ProjectsMethods } = require('../projects');
const { PagesMethods } = require('../pages');

const get = async (data) => {
  console.log('>>> Sync', data);
  const {
    pageid,
    projectid,
    // published,
    // publickey,
  } = data;

  const project = await Projects.Read({ projectid });

  if (!project) return;
  await ProjectsMethods.syncProjectData(project);

  const page = await Pages.Read({ pageid });

  if (!page) {
    await ProjectsMethods.syncProjectPageList(project);
  } else {
    await PagesMethods.syncPageData(page);
  }
};

module.exports = {
  get,
};

