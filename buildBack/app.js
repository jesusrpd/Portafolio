"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

var _trabajos = _interopRequireDefault(require("./routes/trabajos.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)(); //Middlewares de configuración

app.use((0, _cors.default)());
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: false
}));
app.use((0, _morgan.default)("dev")); //Archivos estaticos

app.use(_express.default.static('build')); //Rutas

app.use('/api/trabajos', _trabajos.default);
var _default = app;
exports.default = _default;