"use strict";

var _graphqlYoga = require("graphql-yoga");

var _resolvers = require("./graphql/resolvers");

var _resolvers2 = _interopRequireDefault(_resolvers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var typeDefs = "\ntype Movie {\n  id: Int!\n  title: String!\n  rating: Float\n  description_intro: String\n  language: String\n  medium_cover_image: String\n  genres: [String]\n}\n\ntype Query {\n  test: String\n  movies(limit: Int, rating: Float): [Movie]\n  movie(id: Int!): Movie\n  suggestions(id: Int!): [Movie]\n}\n";

var options = {
  cors: {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
  },
  credentials: true,
  timeout: 300000
};

var server = new _graphqlYoga.GraphQLServer({
  typeDefs: typeDefs,
  resolvers: _resolvers2.default
});

var handleAppStart = function handleAppStart() {
  return console.log("Graphql Server Running");
};

server.start(options, handleAppStart);