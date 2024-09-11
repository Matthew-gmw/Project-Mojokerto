"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Pilihan", [
      {
        id: "1c35d224-a5f7-417b-b8c9-1334fd841344",
        id_soal: "03b09436-9de9-4b1d-a38f-f9e49ccb01df",
        url_asset: "linkk",
        createdBy: null,
        updatedBy: null,
        createdAt: "2024-09-11T04:28:50.600Z",
        updatedAt: "2024-09-11T04:28:50.600Z",
      },
      {
        id: "a8116678-698d-4668-a535-315eed1502a2",
        id_soal: "18b625bc-be2b-40bf-9c64-d20de75a7061",
        url_asset: "linkk",
        createdBy: null,
        updatedBy: null,
        createdAt: "2024-09-11T04:29:04.557Z",
        updatedAt: "2024-09-11T04:29:04.557Z",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Pilihan", null, {});
  },
};
