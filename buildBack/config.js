"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dotenv = require("dotenv");

(0, _dotenv.config)();
var _default = {
  PORT: process.env.PORT || 4000,
  URI: "mongodb+srv://".concat(process.env.USER, ":").concat(process.env.PASSWORD, "@cluster0.rkcwz.mongodb.net/").concat(process.env.DBNAME, "?retryWrites=true&w=majority")
};
exports.default = _default;