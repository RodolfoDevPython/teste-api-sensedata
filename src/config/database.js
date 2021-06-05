//Arquivo de exportação das config do Banco
//@fontes do site
//https://sequelize.org/v5/manual/getting-started.html#installing

module.exports = {
    production: {
        url: "postgres://llnlffkmecdbex:310cf49ac31278bd5cdb5553bbd819c165dbd7fef709a58903ca694fae727ab1@ec2-34-232-191-133.compute-1.amazonaws.com:5432/d97al156bgcbvb",
        dialect: 'postgres',
    },
};

//LEMBRANDO QUE PARA MANDAR O SEQUELIZE CRIAR A CONEXAO COM O BANCO
//DEVEMOS PASSAR AS CREDENCIAIS NO ARQUIVO .sequelizerc