"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Jawaban",
      [
        {
          id: "c46be08a-3f78-4dcf-ac8c-657518739b11",
          id_assessment: "e1fcf430-8de0-453a-87e7-5b754af1a333",
          id_soal: "03b09436-9de9-4b1d-a38f-f9e49ccb01df",
          id_user: "81b3756d-e80c-41c2-a9ea-4828c4fcc162",
          id_pilihan: "1c35d224-a5f7-417b-b8c9-1334fd841344",
          createdBy: null,
          updatedBy: null,
          createdAt: "2024-09-11T04:48:52.910Z",
          updatedAt: "2024-09-11T04:48:52.910Z",
        },
      ],

      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Jawaban", null, {});
  },
};
