const model = require('../pages/model');

const Pages = { model };

const Projects = require('../projects');

console.log('>>> PagesMethods', 'Pages:', !!Pages.model, 'Projects:', Projects);

const { fetchPageData } = require('../../services/tilda');

const getPage = async (pageid, extend) => {
  const page = await Pages.model.findOne({ pageid });

  if (!extend) return page;
  const project = await Projects.model.findOne({ projectid: page.projectid });
  const { css, js } = project;

  // eslint-disable-next-line no-underscore-dangle
  return { ...page._doc, css, js };
};

const syncPageData = async (page) => {
  if (!page.sync) return;

  // eslint-disable-next-line no-underscore-dangle
  const project = await Projects.model.findOne({ _id: page._projectid });
  const data = await fetchPageData(page, 'getpage', project);

  // eslint-disable-next-line consistent-return
  return data && Pages.model.findOneAndUpdate({ _id: page._id },
    { $set: data },
    {
      new: true,
    });
};

module.exports = {
  getPage,
  syncPageData,
};

