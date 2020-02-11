import { GraphQLServer } from "graphql-yoga";
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
  test: String
  movies(limit: Int, rating: Float): [Movie]
  movie(id: Int!): Movie
  suggestions(id: Int!): [Movie]
}
`;

const options = {
  cors: {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
  },
  credentials: true,
  timeout: 300000
};

const server = new GraphQLServer({
  typeDefs: typeDefs,
  resolvers
});

const handleAppStart = () => console.log("Graphql Server Running");

server.start(options, handleAppStart);
