const projectsMethods = require('./methods');
const { pagesMethods } = require('../pages');
const { syncMethods } = require('../sync');

console.log('>>> ProjectsHandler', !!pagesMethods, !!syncMethods, !!projectsMethods);

const get = async (req, res) => {
  const {
    params: { projectid },
  } = req;

  console.log('projectid', projectid);
  const project = await projectsMethods.getProject(projectid);


  if (!project) res.status(400).send(`Bad Request, project: ${project}`);

  res.send(project);
};

module.exports = {
  get,
};

