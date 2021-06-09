const { Tag } = require('../models');

const tagData = [
    {
        tag_name: 'rap music',
    },
    {
        tag_name: 'classic music',
    },
    {
        tag_name: 'yellow',
    },
    {
        tag_name: 'pink',
    },
    {
        tag_name: 'orange',
    },
    {
        tag_name: 'silver',
    },
    {
        tag_name: 'brown',
    },
    {
        tag_name: 'culture',
    },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
