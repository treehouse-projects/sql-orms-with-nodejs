'use strict';

const db = require('./db');

(async () => {
  await db.sequelize.sync({ force: true });

  const movie = await db.models.Movie.create({
    title: 'Toy Story',
  });
  console.log(movie.toJSON());
})();
