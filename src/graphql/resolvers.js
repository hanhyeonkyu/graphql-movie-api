import { getMovies, getMovie, getSuggestions } from "./db";

const resolvers = {
  Query: {
    test: (_, {}) => "********************************************",
    // movies: (_, { limit, rating }) => getMovies(limit, rating),
    movies: (_, { limit, rating }) => {
      return getMovies(limit, rating).then(res => {
        return res;
      });
    },
    movie: (_, { id }) => getMovie(Number(id)),
    suggestions: (_, { id }) => getSuggestions(Number(id))
  }
};

export default resolvers;
