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
    var data, movies;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _axios2.default)(LIST_MOVIES_URL, {
              params: {
                limit: limit,
                minimum_rating: rating
              },
              headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
              }
            });

          case 2:
            data = _context.sent;
            movies = data.data.data.movies;

            if (!movies) {
              _context.next = 8;
              break;
            }

            return _context.abrupt("return", movies);

          case 8:
            return _context.abrupt("return", null);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function getMovies(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var getMovie = exports.getMovie = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(id) {
    var _ref3, movie;

    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _axios2.default)(MOVIE_DETAILS_URL, {
              params: {
                movie_id: id
              }
            }).catch(function (err) {
              if (err.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                // console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
              } else if (err.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(err.request);
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", err.message);
              }
              console.log(err.config);
            });

          case 2:
            _ref3 = _context2.sent;
            movie = _ref3.data.data.movie;

            if (!movie) {
              _context2.next = 8;
              break;
            }

            return _context2.abrupt("return", movie);

          case 8:
            return _context2.abrupt("return", null);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function getMovie(_x3) {
    return _ref2.apply(this, arguments);
  };
}();

var getSuggestions = exports.getSuggestions = function () {
  var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(id) {
    var _ref5, movies;

    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _axios2.default)(MOVIE_SUGGESTIONS_URL, {
              params: {
                movie_id: id
              }
            });

          case 2:
            _ref5 = _context3.sent;
            movies = _ref5.data.data.movies;

            if (!movies) {
              _context3.next = 8;
              break;
            }

            return _context3.abrupt("return", movies);

          case 8:
            return _context3.abrupt("return", null);

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  }));

  return function getSuggestions(_x4) {
    return _ref4.apply(this, arguments);
  };
}();