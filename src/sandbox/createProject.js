/* eslint-disable */
const mongodb = require('../services/mongodb');

const Projects = require('../../src/modules/projects');

const data = {
    "projectid": "3774423",
    "publickey": "fl03dfct56dxa79ht16o",
    "secretkey": "n4yoxj4i89pe42qlyl98",
};

async function sandbox() {
    await mongodb.connect();
    const project = await Projects.projectsMethods.addProject(data).catch(error=>{
        console.log('>>> error');
        console.log(error);
    });
    console.log('>>> project')
    console.log(project)
}

sandbox();





