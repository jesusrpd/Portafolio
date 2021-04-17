"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var trabajoSchema = new _mongoose.Schema({
  "nombre": String,
  "urlImg": String,
  "link": String,
  "seccion": String
});

var _default = (0, _mongoose.model)('trabajo', trabajoSchema);

exports.default = _default;