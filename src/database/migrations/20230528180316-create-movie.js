'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('movies', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      budget: {
        type: Sequelize.NUMBER,
        allowNull: false,
        validate: {
          min: 0,
        },
      },
      homepageUrl: {
        type: Sequelize.STRING,
        validate: {
          notNull: false,
          isUrl: true,
        },
      },
      plot: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      releaseDate: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isDate: true,
        },
      },
      runtimeInMinutes: {
        type: Sequelize.NUMBER,
        allowNull: false,
        validate: {
          min: 1,
        },
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
          isDate: true,
        },
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
          isDate: true,
        },
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('movies');
  },
};
