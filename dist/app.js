"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
require("dotenv/config");
const standalone_1 = require("@apollo/server/standalone");
const schemas_1 = require("./schemas");
const resolvers_1 = require("./resolvers");
require('dotenv').config();
const server = new server_1.ApolloServer({
    typeDefs: schemas_1.typeDefs,
    resolvers: resolvers_1.resolvers,
});
(0, standalone_1.startStandaloneServer)(server, {
    listen: { port: 4000 },
}).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
