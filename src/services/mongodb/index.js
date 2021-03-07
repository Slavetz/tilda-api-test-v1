const mongoose = require('mongoose');
const config = require('../../config');
const logger = require('../../utils/logger');
const DBMethods = require('./methods');

async function createCollections() {
  const { db } = mongoose.connection;

  await db.createCollection('pages');
  await db.createCollection('projects');
}

async function createIndexes() {
  const models = Object.values(mongoose.models);

  // eslint-disable-next-line no-restricted-syntax
  for (const model of models) {
    await model.syncIndexes();
  }
}

async function dropIndexes() {
  const models = Object.values(mongoose.models);

  // eslint-disable-next-line no-restricted-syntax
  for (const model of models) {
    await model.collection.dropIndexes();
  }
}

async function connect() {
  if (['trace'].includes(config.LOG_LEVEL)) {
    mongoose.set('debug', true);
  }

  logger.info('connecting to mongo...');
  await mongoose.connect(config.MONGO_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
  logger.info('connected to mongo');

  return mongoose.connection;
}

function isConnected() {
  return mongoose.connection.readyState === mongoose.Connection.STATES.connected;
}

function waitForConnection() {
  return new Promise((resolve) => {
    if (isConnected()) {
      resolve(mongoose.connection);
    } else {
      mongoose.connection.once('open', () => resolve(mongoose.connection));
    }
  });
}

module.exports = {
  connect,
  waitForConnection,
  isConnected,
  createIndexes,
  createCollections,
  dropIndexes,
  DBMethods,
};
