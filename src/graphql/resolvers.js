import { getMovies, getMovie, getSuggestions } from "./db";

const resolvers = {
  Query: {
    test: (_, {}) => "********************************************",
    movies: async (_, { limit, rating }) => await getMovies(limit, rating),
    movie: (_, { id }) => getMovie(Number(id)),
    suggestions: (_, { id }) => getSuggestions(Number(id))
  }
};

export default resolvers;
