const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Transaction = require('../models/Transaction');

const connection = new Sequelize(dbConfig);

//Iniciacao dos Models 
Transaction.init(connection);
//TODA VEZ que damos um init ele grava o models na connection

module.exports = connection;