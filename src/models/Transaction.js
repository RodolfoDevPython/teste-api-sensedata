const { Model , DataTypes } = require('sequelize');

class Transaction extends Model {
    static init(sequelize) {
        super.init({
            title: DataTypes.STRING,
            type: DataTypes.STRING,
            category: DataTypes.STRING,
            valor: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = Transaction;
