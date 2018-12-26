'use strict';
const db = require('@arangodb').db;
const helpers = require('../lib/helpers');

Object.entries(helpers.SERVICE_COLLECTIONS).forEach(entry => {
  const collName = entry[1];
  db._truncate(collName);
  console.log(`Truncated collection: ${collName}`);
});

module.exports = helpers.SERVICE_COLLECTIONS;