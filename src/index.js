const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const { makeExecutableSchema } = require("graphql-tools");
// import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const typeDefs = `
type Movie {
  id: Int!
  title: String!
  rating: Float
  description_intro: String
  language: String
  medium_cover_image: String
  genres: [String]
}

type Query {
  movies(limit: Int, rating: Float): [Movie]!
  movie(id: Int!): Movie
  suggestions(id: Int!): [Movie]!
}
`;
const myGraphQLSchema = makeExecutableSchema({ typeDefs, resolvers });
const PORT = 4000;
const app = express();
app.use(cors());
app.use(
  "/graphql",
  bodyParser.json(),
  graphqlExpress({ schema: myGraphQLSchema })
);
app.get("./graphql", graphiqlExpress({ endpointURL: "/graphql" }));

console.log(`Server listening on http://localhost:${PORT} ...`);

app.listen(PORT);

// server.start(() => console.log("Graphql Server Running"));
