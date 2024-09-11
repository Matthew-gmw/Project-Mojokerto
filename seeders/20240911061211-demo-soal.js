"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Soal", [
      {
        id: "03b09436-9de9-4b1d-a38f-f9e49ccb01df",
        id_assessment: "e1fcf430-8de0-453a-87e7-5b754af1a333",
        soal_text: "Gambar apa ini?",
        waktu_soal: 60,
        waktu_menjawab: 60,
        kunci_jawaban: "ABCDE",
        createdBy: null,
        updatedBy: null,
        createdAt: "2024-09-11T04:27:36.501Z",
        updatedAt: "2024-09-11T04:27:36.501Z",
      },
      {
        id: "18b625bc-be2b-40bf-9c64-d20de75a7061",
        id_assessment: "2d070efa-b394-4790-a9c7-8f0a4d607fc8",
        soal_text: "Pilih yang bentuk rumah",
        waktu_soal: 60,
        waktu_menjawab: 60,
        kunci_jawaban: "DACB",
        createdBy: null,
        updatedBy: null,
        createdAt: "2024-09-11T04:27:59.527Z",
        updatedAt: "2024-09-11T04:27:59.527Z",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Soal", null, {});
  },
};
