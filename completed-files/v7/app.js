'use strict';

const db = require('./db');

const { Movie, Person } = db.models;
const { Op } = db.Sequelize;

(async () => {
  await db.sequelize.sync({ force: true });

  try {
    // const movie1 = await Movie.build({
    //   title: 'Toy Story',
    //   runtime: 81,
    //   releaseDate: '1995-11-22',
    //   isAvailableOnVHS: true,
    // });
    // await movie1.save();
    // console.log(movie1.toJSON());

    const movie1 = await Movie.create({
      title: 'Toy Story',
      runtime: 81,
      releaseDate: '1995-11-22',
      isAvailableOnVHS: true,
    });
    // console.log(movie1.toJSON());

    const movie2 = await Movie.create({
      title: 'Toy Story 2',
      runtime: 92,
      releaseDate: '1999-11-24',
      isAvailableOnVHS: true,
    });
    // console.log(movie2.toJSON());

    const movie3 = await Movie.create({
      title: 'Toy Story 3',
      runtime: 103,
      releaseDate: '2010-06-18',
      isAvailableOnVHS: false,
    });
    // console.log(movie3.toJSON());

    const person1 = await Person.create({
      firstName: 'Tom',
      lastName: 'Hanks',
    });
    // console.log(person1.toJSON());

    // Retrieving records...

    const movies = await Movie.findAll({
      attributes: ['id', 'title'],
      // where: {
      //   id: 1,
      // },
      order: [['id', 'DESC']],
    });
    console.log(movies.map(movie => movie.get({ plain: true })));
    // console.log(movies.map(movie => movie.toJSON()));
    // console.log(JSON.stringify(movies));

    // const toyStory = await Movie.findOne({ where: { id: 1 } });
    // console.log(toyStory.toJSON());

    // const toyStory = await Movie.findByPk(1);
    // console.log(toyStory.toJSON());

    // Updating a record...

    // toyStory.isAvailableOnVHS = false;
    // // toyStory.set('isAvailableOnVHS', false);
    // // toyStory.set({ isAvailableOnVHS: false });
    // await toyStory.save();

    // await toyStory.update({
    //   title: 'Ignored Update!',
    //   isAvailableOnVHS: false,
    // }, { fields: ['isAvailableOnVHS'] });

    // const toyStory2 = await Movie.findOne({ where: { id: 1 } });
    // console.log(toyStory2.toJSON());

    // Deleting a record...

    // await toyStory.destroy();

    // const movies2 = await Movie.findAll({
    //   attributes: ['id', 'title', 'deletedAt'],
    //   // where: {
    //   //   deletedAt: {
    //   //     [Op.ne]: null,
    //   //   },
    //   // },
    //   paranoid: false,
    // });
    // console.log(movies2.map(movie => movie.get({ plain: true })));

    // // const toyStory2 = await Movie.findByPk(1);
    // // console.log(toyStory2.toJSON());
  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      const errors = error.errors.map(err => err.message);
      console.error('Validation errors: ', errors);
    } else {
      throw error;
    }
  }
})();
