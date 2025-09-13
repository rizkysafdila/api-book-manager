'use strict'

const { v4: uuidv4 } = require("uuid")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("books", [
      {
        id: uuidv4(),
        title: "Clean Code",
        author: "Robert C. Martin",
        year: 2008,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        title: "Test-Driven Development",
        author: "Kent Beck",
        year: 2003,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        title: "Refactoring",
        author: "Martin Fowler",
        year: 1999,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("books", null, {})
  }
}
