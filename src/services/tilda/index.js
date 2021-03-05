const Axios = require('axios');

const fetchDataFromTilda = async (type, params) => {
  console.log(type, params);

  const url = `http://api.tildacdn.info/v1/${type}`;

  const responce = await Axios.get(url, { params })
    .then((res) => res.data)
    .catch((e) => {
      console.log(e);

      return { status: 'CATCH' };
    });

  const data = responce.status === 'FOUND' && responce.result;

  return data || null;
};

module.exports = {
  fetchDataFromTilda,
};
