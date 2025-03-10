import { ApolloServer } from '@apollo/server';
import 'dotenv/config';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schemas';
import { resolvers } from './resolvers';
require('dotenv').config();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, {
    listen: { port: 4000 },
}).then(({url}) => {
    console.log(`🚀 Server ready at ${url}`);
});
