import { getMovies, getMovie, getSuggestions } from "./db";

const resolvers = {
  Query: {
    movies: (_, { rating, limit }) =>
      getMovies(limit, rating).catch(err => console.log(err)),
    movie: (_, { id }) => getMovie(Number(id)).catch(err => console.log(err)),
    suggestions: (_, { id }) =>
      getSuggestions(Number(id).catch(err => console.log(err)))
  }
};

export default resolvers;
