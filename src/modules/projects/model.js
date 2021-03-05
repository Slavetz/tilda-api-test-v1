const { Schema, model } = require('mongoose');

const ArrayOfStrings = [{ type: String }];

const ProjectsSchema = new Schema({
  publickey: {
    type: String,
    required: true,
  },
  secretkey: {
    type: String,
    required: true,
  },
  projectid: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
  },
  descr: {
    type: String,
  },
  customdomain: {
    type: String,
  },
  css: ArrayOfStrings,
  js: ArrayOfStrings,
});

module.exports = model('projects', ProjectsSchema);
