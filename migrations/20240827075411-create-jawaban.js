"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Jawaban", {
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
      id_soal: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: {
            tableName: "Soal",
          },
          key: "id",
        },
      },
      id_user: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: {
            tableName: "User",
          },
          key: "id",
        },
      },
      id_pilihan: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: {
            tableName: "Pilihan",
          },
          key: "id",
        },
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
    await queryInterface.dropTable("Jawaban");
  },
};
