"use strict";

const assessment = require("../models/assessment");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Soal", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      id_assessment: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: {
            tableName: "Assessment",
          },
          key: "id",
        },
      },
      soal_text: {
        type: Sequelize.STRING,
      },
      waktu_soal: {
        type: Sequelize.INTEGER,
      },
      waktu_menjawab: {
        type: Sequelize.INTEGER,
      },
      kunci_jawaban: {
        type: Sequelize.STRING,
      },
      createdBy: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      updatedBy: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Soal");
  },
};
