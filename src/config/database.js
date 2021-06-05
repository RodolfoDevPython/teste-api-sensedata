//Arquivo de exportação das config do Banco
//@fontes do site
//https://sequelize.org/v5/manual/getting-started.html#installing

module.exports = {
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '41512330',
    database: 'sensedata',
    define: {
        timestamps: true,// significa q toda tabela vai ter um campo com created_at(Onde armazena a data q o registro foi criado), updated_at(data quer foi atualizada)
        underscored: true,//coloca um padrao na criação das tabelas 
        //padrao Snake case ex: nome_databela 
    },
};

//LEMBRANDO QUE PARA MANDAR O SEQUELIZE CRIAR A CONEXAO COM O BANCO
//DEVEMOS PASSAR AS CREDENCIAIS NO ARQUIVO .sequelizerc