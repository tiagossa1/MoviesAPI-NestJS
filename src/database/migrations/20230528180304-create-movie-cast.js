'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('movies-cast', {
      movieId: {
        type: Sequelize.INTEGER,
        references: { key: 'id', model: 'movie' },
      },
      genderId: {
        type: Sequelize.INTEGER,
        references: { key: 'id', model: 'gender' },
      },
      personId: {
        type: Sequelize.INTEGER,
        references: { key: 'id', model: 'person' },
      },
      characterName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('movies-cast');
  },
};
