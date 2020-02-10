const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { ApolloServer } = require("apollo-server-express");
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

const schema = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    endpoint: "/graphql",
    settings: {
      "editor.theme": "dark"
    }
  }
});

const app = express();

schema.applyMiddleware({
  app
});

app.listen(4000);
