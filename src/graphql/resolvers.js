import { getMovies, getMovie, getSuggestions } from "./db";

const resolvers = {
  Query: {
    movies: (_, { limit, rating }) => getMovies(limit, rating),
    movie: (_, { id }) => getMovie(Number(id)),
    suggestions: (_, { id }) => getSuggestions(Number(id))
  }
};

export default resolvers;
