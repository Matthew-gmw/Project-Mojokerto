"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "PengerjaanDetail",
      [
        {
          id: "89b1c806-014d-4369-b1b6-221b34740a2e",
          id_pengerjaan: "8c9fc7d4-4dc4-43f2-9f8d-412639b1634a",
          id_user: "81b3756d-e80c-41c2-a9ea-4828c4fcc162",
          createdBy: null,
          updatedBy: null,
          createdAt: "2024-09-11T05:33:41.078Z",
          updatedAt: "2024-09-11T05:33:41.078Z",
        },
        {
          id: "20b4d630-dda1-49d3-bc99-02d6f3969a2a",
          id_pengerjaan: "8c9fc7d4-4dc4-43f2-9f8d-412639b1634a",
          id_user: "81b3756d-e80c-41c2-a9ea-4828c4fcc162",
          createdBy: null,
          updatedBy: null,
          createdAt: "2024-09-11T05:33:41.078Z",
          updatedAt: "2024-09-11T05:33:41.078Z",
        },
      ],

      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("PengerjaanDetail", null, {});
  },
};
