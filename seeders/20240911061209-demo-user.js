"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "User",
      [
        {
          id: "81b3756d-e80c-41c2-a9ea-4828c4fcc162",
          username: "super_admin",
          password: "1sampai8",
          user_access: "admin",
          createdBy: null,
          updatedBy: null,
          createdAt: "2024-09-11T04:26:47.399Z",
          updatedAt: "2024-09-11T04:26:47.399Z",
        },
        {
          id: "086afd93-1e58-4cc5-ba01-8ec2fb43e18c",
          username: "admin1",
          password: "1sampai8",
          user_access: "admin",
          createdBy: null,
          updatedBy: null,
          createdAt: "2024-09-11T06:14:41.491Z",
          updatedAt: "2024-09-11T06:14:41.491Z",
        },
        {
          id: "9505cea0-3b62-4a34-9e15-4e97878764b5",
          username: "peserta1",
          password: "1sampai8",
          user_access: "peserta",
          createdBy: null,
          updatedBy: null,
          createdAt: "2024-09-11T06:14:55.716Z",
          updatedAt: "2024-09-11T06:14:55.716Z",
        },
        {
          id: "d6c6bf57-b3c3-4ccd-ab63-58bc4d5bf4f6",
          username: "peserta2",
          password: "1sampai8",
          user_access: "peserta",
          createdBy: null,
          updatedBy: null,
          createdAt: "2024-09-11T06:14:59.590Z",
          updatedAt: "2024-09-11T06:14:59.590Z",
        },
        {
          id: "8859379c-c4c6-4cb2-8a84-ae1a68572e6a",
          username: "peserta3",
          password: "1sampai8",
          user_access: "peserta",
          createdBy: null,
          updatedBy: null,
          createdAt: "2024-09-11T06:15:02.904Z",
          updatedAt: "2024-09-11T06:15:02.904Z",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("User", null, {});
  },
};
