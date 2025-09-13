'use strict'

const { v4: uuidv4 } = require("uuid")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("books", [
      {
        id: uuidv4(),
        title: "Animal Farm",
        author: "George Orwell",
        year: 1945,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        title: "Sang Pemimpi",
        author: "Andrea Hirata",
        year: 2006,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        title: "Bumi Manusia",
        author: "Pramoedya Ananta Toer",
        year: 1980,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("books", null, {})
  }
}
