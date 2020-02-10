"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _db = require("./db");

var resolvers = {
  Query: {
    movies: function movies(_, _ref) {
      var rating = _ref.rating,
          limit = _ref.limit;
      return (0, _db.getMovies)(limit, rating).catch(function (err) {
        return console.log(err);
      });
    },
    movie: function movie(_, _ref2) {
      var id = _ref2.id;
      return (0, _db.getMovie)(Number(id)).catch(function (err) {
        return console.log(err);
      });
    },
    suggestions: function suggestions(_, _ref3) {
      var id = _ref3.id;
      return (0, _db.getSuggestions)(Number(id).catch(function (err) {
        return console.log(err);
      }));
    }
  }
};

exports.default = resolvers;