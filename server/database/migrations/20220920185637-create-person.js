'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable('people', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      }, 
      phone: {
        type: Sequelize.STRING,
        allowNull: false
      }, 
      gender: {
        type: Sequelize.CHAR,
        allowNull: false
      }, 
      about: {
        type: Sequelize.TEXT
      },
      address: {
        type: Sequelize.STRING
      }, 
      image: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    });
  },
  async down(queryInterface, Sequelize) {
    return await queryInterface.dropTable('people');
  }
}
