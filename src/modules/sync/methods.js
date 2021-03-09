const Pages = require('../pages');
const Projects = require('../projects');

console.log('>>> SyncMethods', 'Pages:', Pages, 'Projects:', Projects);

const syncPage = async (data) => {
  console.log('>>> syncPage', data);
  const {
    pageid,
    projectid,
    // published,
    // publickey,
  } = data;

  const project = await Projects.model.findOne({ projectid });

  if (!project) return;
  await Projects.methods.syncProjectData(project);

  const page = await Pages.model.findOne({ pageid });

  if (!page) {
    await Projects.methods.syncProjectPageList(project);
  } else {
    await Pages.methods.syncPageData(page);
  }
};

module.exports = {
  syncPage,
};

