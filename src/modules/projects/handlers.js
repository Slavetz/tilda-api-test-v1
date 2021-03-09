const ProjectsMethods = require('./methods');

const get = async (req, res) => {
  const {
    params: { projectid },
  } = req;

  console.log('projectid', projectid);
  const project = await ProjectsMethods.getProject(projectid);

  console.log('project', project);

  res.send(project);
};

module.exports = {
  get,
};

