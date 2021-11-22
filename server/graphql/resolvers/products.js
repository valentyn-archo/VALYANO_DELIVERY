/* eslint-disable no-unused-vars */
const client = require('../../db/config');

module.exports = {
    Query: {
        getProducts: async (_, __) => {
            const collection = client
                .db('valyano_delivery')
                .collection('products');

            // return data;
            return await collection.find({}).toArray();
        }
    }
};
