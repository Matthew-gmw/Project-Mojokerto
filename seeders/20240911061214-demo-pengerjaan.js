"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Pengerjaan",
      [
        {
          id: "99ed4929-a754-44fe-8eba-0cbc58d91a6f",
          id_assessment: "e1fcf430-8de0-453a-87e7-5b754af1a333",
          jumlah_peserta: 100,
          createdBy: null,
          updatedBy: null,
          createdAt: "2024-09-11T05:30:28.968Z",
          updatedAt: "2024-09-11T05:30:28.968Z",
        },
        {
          id: "8c9fc7d4-4dc4-43f2-9f8d-412639b1634a",
          id_assessment: "e1fcf430-8de0-453a-87e7-5b754af1a333",
          jumlah_peserta: 100,
          createdBy: null,
          updatedBy: null,
          createdAt: "2024-09-11T05:33:41.039Z",
          updatedAt: "2024-09-11T05:33:41.039Z",
        },
      ],

      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Pengerjaan", null, {});
  },
};
