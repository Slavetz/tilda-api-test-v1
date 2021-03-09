/* eslint-disable */
const mongodb = require('../services/mongodb');

const Pages = require('../pages');
const Projects = require('../projects');

async function sandbox() {
  await mongodb.connect();
  // const aaa = await Projects.Methods.syncProjectData('3774423');
  // const aaa = await Projects.Methods.syncProjectPageList('3774423');
  // const aaa = await Pages.methods.syncPageData('17791849');
}

sandbox();

