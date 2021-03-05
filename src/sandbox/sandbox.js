/* eslint-disable */
const mongodb = require('../services/mongodb');
const ProjectsHandlers = require('../modules/projects/handlers');
const PagesHandlers = require('../modules/pages/handlers');

async function sandbox() {
  await mongodb.connect();
  // const aaa = await ProjectsMethods.syncProjectData('3774423');
  // const aaa = await ProjectsMethods.syncProjectPageList('3774423');
  const aaa = await PagesMethods.syncPageData('17791849');

  console.log(aaa);
}

sandbox();

