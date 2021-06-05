Criação de uma API com Node.js 

utilizando o express:
    EXPRESS é um micro-framework que ajuda lidar com as rodas e as views(só que como vamos criar uma api nção vamos utilizar essa view)

utilizamos tambem o NODEMON :
    Onde ele faz a reinicialização do servidor para cada alteração no arquivo main(server.js) 

UTILIZANDO O SEQUILIZE COM MYSQL
COMANDOS:
    Criar o Banco de Dados
        - yarn sequelize db:create
    Criar uma Estrtura para tabela com migrations
        -yarn sequelize migration:create --name=create-users 
        (aqui no --name pode colocar de acordo com oque a migrations vai fazer)
    Criando a tabela de acordo com a estrutura do migration
        -yarn sequelize db:migrate 
        obs: Quando ele vai criar ele cria uma tabela de sequelizemeta 
        (Onde registrar as outras migrations criadas)
    Revertendo a alteração da tabela
        -yarn sequelize db:migrate:undo
        obs1: Reverte a ultima migration criada
        obs2: Isso só funciona no ambiente de Dev 
        na Produção não da pra dar RollBack. Para isso 
        deve criar uma nova migration para colocar suas
        novas alterações.

ESTRUTURA:
    Cada Tabela criada de acordo com a estrutura montada com o migration
        - Criamos uma Classe Modelo da para essa Tabela 
        - Iniciamos essa Classe Modelo no database/index.js 
