"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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
    movies: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_, _ref3) {
        var limit = _ref3.limit,
            rating = _ref3.rating;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _db.getMovies)(limit, rating);

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, undefined);
      }));

      return function movies(_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }(),
    movie: function movie(_, _ref4) {
      var id = _ref4.id;
      return (0, _db.getMovie)(Number(id));
    },
    suggestions: function suggestions(_, _ref5) {
      var id = _ref5.id;
      return (0, _db.getSuggestions)(Number(id));
    }
  }
};

exports.default = resolvers;