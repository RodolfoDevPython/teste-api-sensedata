//Arquivo de exportação das config do Banco
//@fontes do site
//https://sequelize.org/v5/manual/getting-started.html#installing

module.exports = {
    production: {
        url: process.env.DATABASE_URL,
        dialect: 'postgres',
    },
};

//LEMBRANDO QUE PARA MANDAR O SEQUELIZE CRIAR A CONEXAO COM O BANCO
//DEVEMOS PASSAR AS CREDENCIAIS NO ARQUIVO .sequelizerc