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
    input ProductInput {
        _id: String!
        category: String!
        name: String!
        imgUrl: String!
        price: Float!
        discounts: Int!
        popular: Boolean!
        amount: Int!
    }
    input OrderInput {
        orderList: [ProductInput]!
        totalPrice: Float!
    }
    type Order {
        _id: String!
        date: String!
        orderList: [Product]!
        totalPrice: Float!
    }
    type Query {
        getProducts: [Product]!
        getPopularProducts: [Product]!
        getProductsByCategory(
            category: String!
        ): [Product]!
        getProductsWithDiscount: [Product]!
    }
    type Mutation {
        createNewOrder(orderInput: OrderInput!): Order
    }
`;
