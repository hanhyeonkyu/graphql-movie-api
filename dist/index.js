"use strict";

var _resolvers = require("./graphql/resolvers");

var _resolvers2 = _interopRequireDefault(_resolvers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

var _require = require("apollo-server-express"),
    ApolloServer = _require.ApolloServer;

var typeDefs = "\ntype Movie {\n  id: Int!\n  title: String!\n  rating: Float\n  description_intro: String\n  language: String\n  medium_cover_image: String\n  genres: [String]\n}\n\ntype Query {\n  movies(limit: Int, rating: Float): [Movie]!\n  movie(id: Int!): Movie\n  suggestions(id: Int!): [Movie]!\n}\n";

var schema = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: _resolvers2.default,
  playground: {
    endpoint: "/graphql",
    settings: {
      "editor.theme": "dark"
    }
  }
});

var app = express();

schema.applyMiddleware({
  app: app
});

app.listen(4000);

// app.use(
//   "/graphql",
//   bodyParser.json(),
//   graphqlExpress({ schema: myGraphQLSchema })
// );
// app.get("./graphql", graphiqlExpress({ endpointURL: "/graphql" }));

// console.log(`Server listening on http://localhost:${PORT} ...`);

// app.listen(PORT);

// server.start(() => console.log("Graphql Server Running"));