const Axios = require('axios');

const fetchDataFromTilda = async (type, params) => {
  console.log(type, params);

  const url = `http://api.tildacdn.info/v1/${type}`;

  const response = await Axios.get(url, { params })
    .then((res) => res.data)
    .catch((e) => {
      console.log(e);

      return { status: 'CATCH' };
    });

  const data = response.status === 'FOUND' && response.result;

  return data || null;
};

const fetchPageData = async (page, type, project) => {
  // eslint-disable-next-line no-underscore-dangle

  const {
    publickey,
    secretkey,
  } = project;

  const {
    pageid,
  } = page;

  const params = {
    publickey,
    secretkey,
    pageid,
  };

  return fetchDataFromTilda(type, params);
};

const fetchProjectData = async (project, type) => {
  const {
    publickey,
    secretkey,
    projectid,
  } = project;

  const params = {
    publickey,
    secretkey,
    projectid,
  };

  return fetchDataFromTilda(type, params);
};

module.exports = {
  fetchPageData,
  fetchProjectData,
};
