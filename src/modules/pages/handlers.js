const { Pages, Projects } = require('../dataLayer');

const get = async (pageid, { extend = false }) => {
  const page = await Pages.findOne({ pageid });

  if (!extend) return page;
  const project = await Projects.findOne({ projectid: page.projectid });
  const { css, js } = project;

  // eslint-disable-next-line no-underscore-dangle
  return { ...page._doc, css, js };
};
const patch = async (pageid, data) => Pages.findOneAndUpdate({ pageid },
        { $set: data },
        {
          new: true,
        });



module.exports = {
  get,
  patch,
};

