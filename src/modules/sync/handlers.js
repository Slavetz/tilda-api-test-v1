/* eslint-disable no-unused-vars  */
const { Projects, Pages } = require('../dataLayer');
const { projectsMethods } = require('../projects');
const { pagesMethods } = require('../pages');

const get = async (data) => {
  console.log('>>> Sync', data);
  const {
    pageid,
    projectid,
    // published,
    // publickey,
  } = data;

  const project = await Projects.findOne({ projectid });

  if (!project) return;
  await projectsMethods.syncProjectData(project);

  const page = await Pages.findOne({ pageid });

  if (!page) {
    await projectsMethods.syncProjectPageList(project);
  } else {
    await pagesMethods.syncPageData(page);
  }
};

module.exports = {
  get,
};

