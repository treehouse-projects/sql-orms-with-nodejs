'use strict';

const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'movies.db',
  // sync: { force: true },
});

const db = {
  sequelize,
  Sequelize,
  models: {},
};

db.models.Movie = require('./models/movie.js')(sequelize);

module.exports = db;
