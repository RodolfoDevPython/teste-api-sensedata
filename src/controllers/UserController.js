//Controller ele q lida com as request e devolve as respostas das requisiçoçes para a nosso Front-end

const User = require('../models/User');

module.exports = {
    async index( req, res) {
        const users = await User.findAll();
        return res.json(users);
    },
    async store(req, res) {
        const { name , age} = req.body; //Enviando no Body da request
        //Como toda manipulaçaõ do banco de dados é async 
        //vamos dar um await
        
        const user = await User.create( {name , age} );

        return res.json(user);
    }
};