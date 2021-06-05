//Controller ele q lida com as request e devolve as respostas das requisiçoçes para a nosso Front-end

const Product = require('../models/Products');

module.exports = {
    //function de listagem
    async index( req, res) {

        const { page = 1} = req.query;//Serve para pegar por get 

        const options = {
            attributes: ['id', 'title', 'description', 'url'],
            page , // Default 1
            paginate: 10, // Default 25
            order: [['id']]
            //where: { name: { [Op.like]: `%elliot%` } }
        }

        const product = await Product.paginate(options)

        return res.json(product);
    },
    async store(req, res) {
        const { title , description, url } = req.body; //Enviando no Body da request
        //Como toda manipulaçaõ do banco de dados é async 
        //vamos dar um await
        
        const product = await Product.create( {
            title ,
            description ,
            url ,
        });
         
        return res.json(product);
    },
    //listagem por id especifico
    async show(req, res) {
        const {id_product} = req.params;
        
        const product = await Product.findByPk( id_product );

        if (!product) {
            return res.status(400).json( { error : 'No product found for this id' } ) 
        }
        return res.json(product)
    },
    async update(req, res) {
        const { id_transaction } = req.params;
        
        const newProduct = req.body;
        
        const product = await Product.findOne( { where : {id : id_product } } ) 

        if (!product) {
            return res.status(400).json( {error : 'Can not found Product for upload' } )
        }

        Product.update( 
            newProduct , 
            { where: { id: id_product } }
        )
        .then( () => res.json( { status: "Product Updated!!! "} ) )
        .catch( (error) => console.warn(`Problema no Update -> ${error}`) );
        
        //testar como ficou essa atualização

    },
    async delete(req, res) {
        const { id_product } = req.params;
        const id = id_product;

        const result = await Product.findByPk(id_product);

        if (!result) {
            return res.status(400).json( { error: "Can not found this product" });
        }

        await Product.destroy({
            where: { id }
        });
        
        return res.json('Excluido com sucesso');
    }
    
};