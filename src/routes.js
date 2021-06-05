const express = require('express');

const TransactionController = require('./controllers/TransactionController.js');

const routes = express.Router();

routes.get("/filter/all/", TransactionController.getFilterAll);
routes.get("/transaction/:id/", TransactionController.index);
routes.get("/transactions/", TransactionController.show);
routes.post("/transaction", TransactionController.store);
routes.put("/transaction/:id", TransactionController.update);
routes.delete("/transaction/:id", TransactionController.delete);

routes.get("/orderby/transaction/", TransactionController.orderBy);

module.exports = routes;