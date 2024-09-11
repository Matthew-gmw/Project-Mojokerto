"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Assessment",
      [
        {
          id: "e1fcf430-8de0-453a-87e7-5b754af1a333",
          nilai: 100,
          createdBy: null,
          updatedBy: null,
          createdAt: "2024-09-11T04:27:00.439Z",
          updatedAt: "2024-09-11T04:27:00.439Z",
        },
        {
          id: "2d070efa-b394-4790-a9c7-8f0a4d607fc8",
          nilai: 90,
          createdBy: null,
          updatedBy: null,
          createdAt: "2024-09-11T04:27:09.799Z",
          updatedAt: "2024-09-11T04:27:09.799Z",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Assessment", null, {});
  },
};
