"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSuggestions = exports.getMovie = exports.getMovies = undefined;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BASE_URL = "https://yts-proxy.now.sh/";
var LIST_MOVIES_URL = BASE_URL + "list_movies.json";
var MOVIE_DETAILS_URL = BASE_URL + "movie_details.json";
var MOVIE_SUGGESTIONS_URL = BASE_URL + "movie_suggestions.json";

var getMovies = exports.getMovies = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(limit, rating) {
    var _ref2, movies;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _axios2.default.get(LIST_MOVIES_URL, {
              params: {
                limit: limit,
                minimum_rating: rating
              }
            });

          case 3:
            _ref2 = _context.sent;
            movies = _ref2.data.data.movies;
            return _context.abrupt("return", movies);

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);

            console.log(_context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 8]]);
  }));

  return function getMovies(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var getMovie = exports.getMovie = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(id) {
    var _ref4, movie;

    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _axios2.default.get(MOVIE_DETAILS_URL, {
              params: {
                movie_id: id
              }
            });

          case 2:
            _ref4 = _context2.sent;
            movie = _ref4.data.data.movie;
            return _context2.abrupt("return", movie);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function getMovie(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

var getSuggestions = exports.getSuggestions = function () {
  var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(id) {
    var _ref6, movies;

    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _axios2.default.get(MOVIE_SUGGESTIONS_URL, {
              params: {
                movie_id: id
              }
            });

          case 2:
            _ref6 = _context3.sent;
            movies = _ref6.data.data.movies;
            return _context3.abrupt("return", movies);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  }));

  return function getSuggestions(_x4) {
    return _ref5.apply(this, arguments);
  };
}();