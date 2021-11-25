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
    type ContactInformation {
        name: String!
        phone: String!
        address: String!
        comment: String
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
    input ContactInformationInput {
        name: String!
        phone: String!
        address: String!
        comment: String
    }
    input OrderInput {
        orderList: [ProductInput]!
        contactInformation: ContactInformationInput!
        totalPrice: Float!
    }
    type Order {
        _id: String!
        date: String!
        orderList: [Product]!
        contactInformation: ContactInformation!
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
