'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('transactions', { 
      id: {
        type: Sequelize.INTEGER ,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,         
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      }, 
      type: {
        type: Sequelize.STRING,
        allowNull: false,
      }, 
      category: {
        type: Sequelize.STRING,
        allowNull: false,
      }, 
      valor: {
        type: Sequelize.STRING,
        allowNull: false,
      }, 
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */

      return queryInterface.dropTable('transactions');
  }
};
