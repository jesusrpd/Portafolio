"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose.default.connect(_config.default.URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(db => console.log('Database is conected')).catch(err => console.log(err, console.log('Database is not conected')));