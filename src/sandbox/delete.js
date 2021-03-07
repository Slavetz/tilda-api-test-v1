/* eslint-disable */
const mongodb = require('../services/mongodb');
const { Pages, Projects } = require('../modules/dataLayer')

async function sandbox() {
    await mongodb.connect();
    await Projects.Delete({projectid:'3774424'})
    await Projects.Delete({projectid:'3774425'})
}

sandbox();

