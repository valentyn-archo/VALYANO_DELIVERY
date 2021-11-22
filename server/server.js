const {ApolloServer} = require('apollo-server');
const client = require('./db/config');

const resolvers = require('./graphql/resolvers');
const typeDefs = require('./graphql/typeDefs/typeDefs');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    subscriptions: {path: '/'}
});

server.listen().then(async ({url}) => {
    console.log(`🚀 Server ready at ${url}`);
    await client.connect();
    console.log('\n-----------------------------------\n');
    console.log('Connected successfully to mongodb - ✅');
});
