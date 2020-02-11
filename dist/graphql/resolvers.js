"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectDestructuringEmpty2 = require("babel-runtime/helpers/objectDestructuringEmpty");

var _objectDestructuringEmpty3 = _interopRequireDefault(_objectDestructuringEmpty2);

var _db = require("./db");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var resolvers = {
  Query: {
    test: function test(_, _ref) {
      (0, _objectDestructuringEmpty3.default)(_ref);
      return "********************************************";
    },
    // movies: (_, { limit, rating }) => getMovies(limit, rating),
    movies: function movies(_, _ref2) {
      var limit = _ref2.limit,
          rating = _ref2.rating;

      return (0, _db.getMovies)(limit, rating).then(function (res) {
        return res;
      });
    },
    movie: function movie(_, _ref3) {
      var id = _ref3.id;
      return (0, _db.getMovie)(Number(id));
    },
    suggestions: function suggestions(_, _ref4) {
      var id = _ref4.id;
      return (0, _db.getSuggestions)(Number(id));
    }
  }
};

exports.default = resolvers;