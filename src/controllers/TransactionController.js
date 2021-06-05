const { sequelize } = require('../models/Transaction');
const Transaction = require('../models/Transaction');

module.exports = {
    async index(req, res) {
        const { id } = req.params;

        //fazendo um join 
        const transaction = await Transaction.findByPk(id);

        if (!transaction) {
            return res.status(400).json( { error : 'No Transaction found' } );
        }

        return res.json(transaction);
    },
    async show(req, res){

        try {
            const transactions =  await Transaction.findAll();    

            return res.status(201).json({ transactions });

        } catch (error) {
            
            return res.status(501).json({ error })
        }
        


    },
    async store(req, res) {

       const transaction = req.body;

       try {

        const [_, created ] = await Transaction.findOrCreate(
                                                { 
                                                    where: 
                                                    { 
                                                        title: transaction.title, 
                                                        type: transaction.type, 
                                                        category: transaction.category,
                                                        valor: transaction.valor
                                                    } 
                                                }
                                            );

        if (!created) return res.status(201).json({ message: "this transaction already exists" });

        return res.status(201).json({ message: "Creating successful transactions" })

       } catch (error) {

           return res.status(501).json({ error })

       }
        
    },
    async update(req, res) {
        const { id } = req.params;

        const newTransaction = req.body;
        
        const transaction = await Transaction.findOne( { where : { id } } ) 

        if (!transaction) {
            return res.status(400).json( {error : 'Can not found transaction for upload' } )
        }
        
        try {

            await Transaction.update(newTransaction , { where: { id } })

            return res.json( { status: "transaction updated"} );

        } catch (error) {

            return res.status(501).json({ error });            

        }
    
    },
    async delete(req, res) {
        const { id } = req.params;

        const transaction = await Transaction.findByPk(id);

        if (!transaction) {
            return res.status(400).json( { error: "Can not found this transaction" });
        }

        try {
            await Transaction.destroy({
                where: { id }
            });
            
            return res.status(201).json({ message: 'successfully deleted' });    
        } catch (error) {
            return res.status(501).json({ error });    
        }
        
    },
    async orderBy(req, res) {

        const query =  req.query; 
        
        const transaction = await Transaction.findAll({ where: query });

        return res.json(transaction);

    },

    async getFilterAll(req, res) {

        const type = await Transaction.aggregate('type', 'DISTINCT', { plain: false });
        const category = await Transaction.aggregate('category', 'DISTINCT', { plain: false });

        return res.status(201).json({ category, type });
    }
    
}