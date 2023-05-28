'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'genres',
      [
        {
          name: 'Action',
        },
        {
          name: 'Adventure',
        },
        {
          name: 'Comedy',
        },
        {
          name: 'Crime',
        },
        {
          name: 'Mystery',
        },
        {
          name: 'Fantasy',
        },
        {
          name: 'Historical',
        },
        {
          name: 'Horror',
        },
        {
          name: 'Romance',
        },
        {
          name: 'Satire',
        },
        {
          name: 'Science fiction',
        },
        {
          name: 'Speculative',
        },
        {
          name: 'Thriller',
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('genres', null, {});
  },
};
