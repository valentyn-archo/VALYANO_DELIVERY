/* eslint-disable no-unused-vars */
const client = require('../../db/config');
const {ObjectId} = require('mongodb');

module.exports = {
    Query: {
        getProducts: async (_, __) => {
            const collection = client
                .db('valyano_delivery')
                .collection('products');

            // return data;
            return await collection.find({}).toArray();
        },
        getPopularProducts: async (_, __) => {
            const collection = client
                .db('valyano_delivery')
                .collection('products');

            const data = await collection.find({}).toArray();

            // return data;
            return data.filter(product => 
                product.popular
            );
        },
        getProductsByCategory: async (_, args) => {
            const collection = client
                .db('valyano_delivery')
                .collection('products');

            const data = await collection.find({}).toArray();

            // return data;
            return data.filter(product => 
                product.category === args.category
            );
        },
        getProductsWithDiscount: async (_, __) => {
            const collection = client
                .db('valyano_delivery')
                .collection('products');

            const data = await collection.find({}).toArray();

            // return data;
            return data.filter(product => 
                product.discounts > 0
            );
        }
    },
    Mutation: {
        createNewOrder: async (_, args) => {
            const collection = client
                .db('valyano_delivery')
                .collection('orders');

            const data = {
                _id: new ObjectId().toString(),
                date: new Date().toString(),
                orderList: args.orderInput.orderList,
                totalPrice: args.orderInput.totalPrice
            };

            await collection.insertOne(data, (err) => {
                if(err) {
                    console.log(err);
                }
            })

            return data;
        }
    }
};
