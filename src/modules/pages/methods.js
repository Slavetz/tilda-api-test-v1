const pagesModel = require('./model');
const { projectsModel } = require('../projects');

console.log('>>> pagesMethods', !!pagesModel, !!projectsModel)

const getPage = async (pageid, extend) => {
  const page = await pagesModel.findOne({ pageid });

  if (!extend) return page;
  const project = await projectsModel.findOne({ projectid: page.projectid });
  const { css, js } = project;

  // eslint-disable-next-line no-underscore-dangle
  return { ...page._doc, css, js };
};

module.exports = {
  getPage,
};

