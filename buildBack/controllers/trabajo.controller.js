"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteTrabajo = exports.getTrabajos = exports.createTrabajo = void 0;

var _Trabajo = _interopRequireDefault(require("../models/Trabajo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createTrabajo = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res) {
    var {
      nombre,
      urlImg,
      link,
      seccion
    } = req.body;
    var newTrabajo = new _Trabajo.default({
      nombre,
      urlImg,
      link,
      seccion
    });
    yield newTrabajo.save();
    res.status(200).json('Trabajo creado');
  });

  return function createTrabajo(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createTrabajo = createTrabajo;

var getTrabajos = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (req, res) {
    var trabajos = yield _Trabajo.default.find({
      seccion: req.params.seccion
    });
    res.status(200).json(trabajos);
  });

  return function getTrabajos(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getTrabajos = getTrabajos;

var deleteTrabajo = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (req, res) {
    yield _Trabajo.default.findOneAndRemove({
      _id: req.params.id
    });
    res.json('Trabajo Borrado');
  });

  return function deleteTrabajo(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.deleteTrabajo = deleteTrabajo;