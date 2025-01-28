const ProductModel = require('../models/productModel.js');

const getProducts = (req, res) => {
    ProductModel.getAllProducts((err, products) => {
        if (err) {
            return res.status(500).send('Erro ao obter produtos.');
        }
        res.json(products);
    });
};

const saveProduct = (req, res) => {
    const product = req.body;

    ProductModel.saveProduct(product, (err) => {
        if (err) {
            return res.status(500).send('Erro ao salvar produto.');
        }
        res.send('Produto salvo com sucesso.');
    });
};

module.exports = { getProducts, saveProduct };
