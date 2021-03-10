const projectsModel = require('./model');
const { pagesModel } = require('../pages');

console.log('>>> projectsMethods', !!pagesModel, !!projectsModel)

const getProject = async (projectid) => projectsModel.findOne({ projectid });

module.exports = {
  getProject,
};

