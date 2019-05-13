const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'movies.db',
  // sync: { force: true },
});

class Movie extends Sequelize.Model {}
Movie.init({
  title: Sequelize.STRING,
  releaseYear: Sequelize.INTEGER
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
  //   releaseYear: 1994
  // });
  // console.log(movie.toJSON());
})();

// sequelize.sync()
//   .then(() => Movie.create({
//     title: 'Toy Story',
//     releaseYear: 1994
//   }))
//   .then(movie => {
//     console.log(movie.toJSON());
//   });
