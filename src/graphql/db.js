import axios from "axios";
const BASE_URL = "https://yts-proxy.now.sh/";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`;

export const getMovies = async (limit, rating) => {
  const data = await axios({
    url: LIST_MOVIES_URL,
    params: {
      limit,
      minimum_rating: rating
    },
    baseUrl = process.env.baseURL || "http://localhost:3001"
  });
  console.log("------------------------------------");
  const movies = data.data.data.movies;

  if (movies) {
    return movies;
  } else {
    return null;
  }
};

export const getMovie = async id => {
  const {
    data: {
      data: { movie }
    }
  } = await axios(MOVIE_DETAILS_URL, {
    params: {
      movie_id: id
    }
  });
  if (movie) {
    return movie;
  } else {
    return null;
  }
};

export const getSuggestions = async id => {
  const {
    data: {
      data: { movies }
    }
  } = await axios(MOVIE_SUGGESTIONS_URL, {
    params: {
      movie_id: id
    }
  });
  if (movies) {
    return movies;
  } else {
    return null;
  }
};
