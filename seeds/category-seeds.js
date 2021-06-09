const { Category } = require('../models');

const categoryData = [
    {
        category_name: 'Tops',
    },
    {
        category_name: 'Lowers',
    },
    {
        category_name: 'Sounds',
    },
    {
        category_name: 'Head wear',
    },
    {
        category_name: 'Bottoms',
    },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
