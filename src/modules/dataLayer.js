const { DBMethods } = require('../services/mongodb');

const projectsModel = require('./projects/model');
const pagesModel = require('./pages/model');

console.log('projectsModel', projectsModel);
console.log('pagesModel', pagesModel);

const Projects = new DBMethods(projectsModel);
const Pages = new DBMethods(pagesModel);

module.exports = {
  Projects,
  Pages,
};
