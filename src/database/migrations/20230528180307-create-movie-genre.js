'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('movies-genres', {
      movieId: {
        type: Sequelize.INTEGER,
        references: { key: 'id', model: 'movie' },
      },
      genreId: {
        type: Sequelize.INTEGER,
        references: { key: 'id', model: 'genre' },
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('movies-genres');
  },
};
