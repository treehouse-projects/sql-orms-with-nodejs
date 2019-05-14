'use strict';

const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'movies.db',
  // sync: { force: true },
  // define: {
  //   freezeTableName: true,
  //   timestamps: false,
  // },
});

const db = {
  sequelize,
  Sequelize,
  models: {},
};

db.models.Movie = require('./models/movie.js')(sequelize);

module.exports = db;
