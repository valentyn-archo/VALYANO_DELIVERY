const {gql} = require('apollo-server');

module.exports = gql`
    type Product {
        _id: String!
        category: String!
        name: String!
        imgUrl: String!
        price: Float!
        discounts: Int!
        popular: Boolean!
    }
    type Query {
        getProducts: [Product]!
    }
`;
