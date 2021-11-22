const productResolvers = require('./products');

module.exports = {
    Query: {
        ...productResolvers.Query
    },
    Mutation: {
        ...productResolvers.Mutation
    }
};
