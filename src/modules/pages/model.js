const { Schema, model } = require('mongoose');

const PagesSchema = new Schema({
  pageid: {
    type: String,
    required: true,
    unique: true,
  },
  projectid: {
    type: String,
  },
  _projectid: {
    type: Schema.Types.ObjectId,
    ref: 'projects',
  },
  sync: {
    type: Boolean,
    required: true,
    default: false,
  },
  title: {
    type: String,
  },
  descr: {
    type: String,
  },
  img: {
    type: String,
  },
  featureimg: {
    type: String,
  },
  alias: {
    type: String,
  },
  date: {
    type: String,
  },
  sort: {
    type: String,
  },
  published: {
    type: String,
  },
  filename: {
    type: String,
  },
  html: {
    type: String,
  },
});

module.exports = model('pages', PagesSchema);
