const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

const mongodb = require('./services/mongodb');
const appRouter = require('./modules/appRouter');

const initApp = async () => {
  await mongodb.connect();
  const app = express()
    .use(cors())
    .use(appRouter);

  app.listen(PORT, () => console.log(`Listening on ${PORT}`));
};

initApp();

