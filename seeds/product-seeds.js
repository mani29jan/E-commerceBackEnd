const { Product } = require('../models');

const productData = [
    {
        product_name: 'Black T-Shirt',
        price: 19.99,
        stock: 45,
        category_id: 1,
    },
    {
        product_name: 'Shoes',
        price: 99.99,
        stock: 125,
        category_id: 5,
    },
    {
        product_name: 'Snap back',
        price: 15.99,
        stock: 112,
        category_id: 4,
    },
    {
        product_name: 'Classic music album',
        price: 14.99,
        stock: 14,
        category_id: 3,
    },
    {
        product_name: 'Gym pants',
        price: 39.99,
        stock: 32,
        category_id: 2,
    },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
