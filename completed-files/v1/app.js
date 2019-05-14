'use strict';

const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'movies.db',
  // sync: { force: true },
});

class Movie extends Sequelize.Model {}
Movie.init({
  title: Sequelize.STRING,
}, { sequelize });

(async () => {
  // try {
  //   await sequelize.authenticate();
  //   console.log('Connection to the database successful!');
  // } catch (error) {
  //   console.error('Error connecting to the database: ', error);
  // }

  await sequelize.sync({ force: true });

  // const movie = await Movie.create({
  //   title: 'Toy Story',
  // });
  // console.log(movie.toJSON());
})();

// sequelize.sync()
//   .then(() => Movie.create({
//     title: 'Toy Story',
//   }))
//   .then(movie => {
//     console.log(movie.toJSON());
//   });
