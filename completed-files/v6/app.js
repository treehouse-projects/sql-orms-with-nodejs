'use strict';

const db = require('./db');

(async () => {
  await db.sequelize.sync({ force: true });

  const movie = await db.models.Movie.create({
    title: 'Toy Story',
    runtime: 81,
    releaseDate: '1995-11-22',
    isAvailableOnVHS: true,
  });
  console.log(movie.toJSON());

  const person = await db.models.Person.create({
    firstName: 'Tom',
    lastName: 'Hanks',
  });
  console.log(person.toJSON());
})();
