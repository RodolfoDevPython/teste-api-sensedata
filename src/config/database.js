//Arquivo de exportação das config do Banco
//@fontes do site
//https://sequelize.org/v5/manual/getting-started.html#installing

module.exports = {
    dialect: 'postgres',
    host: 'ec2-34-232-191-133.compute-1.amazonaws.com',
    username: 'llnlffkmecdbex',
    password: '310cf49ac31278bd5cdb5553bbd819c165dbd7fef709a58903ca694fae727ab1',
    database: 'd97al156bgcbvb',
    port: 5432,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
    define: {
        timestamps: true,// significa q toda tabela vai ter um campo com created_at(Onde armazena a data q o registro foi criado), updated_at(data quer foi atualizada)
        underscored: true,//coloca um padrao na criação das tabelas 
        //padrao Snake case ex: nome_databela 
    },
};

//LEMBRANDO QUE PARA MANDAR O SEQUELIZE CRIAR A CONEXAO COM O BANCO
//DEVEMOS PASSAR AS CREDENCIAIS NO ARQUIVO .sequelizerc