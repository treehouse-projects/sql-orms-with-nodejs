'use strict';

const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  class Movie extends Sequelize.Model {}
  Movie.init({
    title: Sequelize.STRING,
    releaseYear: Sequelize.INTEGER,
  }, { sequelize });

  return Movie;
};
