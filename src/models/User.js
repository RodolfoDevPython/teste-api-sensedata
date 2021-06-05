const { Model , DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            age: DataTypes.INTEGER,
        }, {
            sequelize
        })
    }
    //Isso foi feito para que ele consiga fazer o inner join 
    //Além da relação criada no Address.js
    //Precisamos dessa relacao hasMany
    //Para usar no controller AddressController(Para fazer uma especie de inner join)
    static associate(models) {
        this.hasMany( models.Address, { foreignKey: 'user_id', as: 'addresses'}) 
    }
    
}

module.exports = User;