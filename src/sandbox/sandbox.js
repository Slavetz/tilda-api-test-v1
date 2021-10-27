/* eslint-disable */
const mongodb = require('../services/mongodb');

const Pages = require('../../src/pages');
const Projects = require('../../src/projects');

async function sandbox() {
  await mongodb.connect();
  // const aaa = await Projects.methods.syncProjectData('3774423');
  // const aaa = await Projects.methods.syncProjectPageList('3774423');
  // const aaa = await Pages.methods.syncPageData('17791849');

  console.log('aaa')
}

sandbox();

