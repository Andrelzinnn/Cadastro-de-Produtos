const fs = require('fs');

class ProductModel {
  static getAllProducts(callback) {
    fs.readFile('products.json', 'utf-8', (err, data) => {
      if (err) return callback(err);
      const products = data ? JSON.parse(data) : [];
      callback(null, products);
    });
  }

  static saveProduct(product, callback) {
    this.getAllProducts((err, products) => {
      if (err) return callback(err);

      products.push(product);

      fs.writeFile('products.json', JSON.stringify(products, null, 2), (err) => {
        if (err) return callback(err);
        callback(null);
      });
    });
  }
}

module.exports = ProductModel;
