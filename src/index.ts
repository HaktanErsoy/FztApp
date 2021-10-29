import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";

import typeDefs from "./typeDefs";
import Query from "./resolvers/Query";
import Mutation from "./resolvers/Mutation";
import Physiotherapist from "./resolvers/Physiotherapist";

const resolvers = {
  Query,
  Physiotherapist,
  Mutation,
};

(async function main() {
  await mongoose
    .connect("mongodb://localhost/fztapp")
    .then(() => console.log("Mongodb Connected"))
    .catch((err) => console.log(err));

  const server = new ApolloServer({ typeDefs, resolvers });

  server.listen().then(() => console.log("Server started"));
})();
