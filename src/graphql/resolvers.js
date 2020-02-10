import { getMovies, getMovie, getSuggestions } from "./db";

const resolvers = {
  Query: {
    movies: (_, { rating, limit }) => getMovies(limit, rating),
    movie: (_, { id }) => getMovie(Number(id)),
    suggestions: (_, { id }) => getSuggestions(Number(id))
  }
};

export default resolvers;
