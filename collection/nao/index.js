"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.theme = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _inputCore = _interopRequireDefault(require("../input-core"));

var _theme = _interopRequireDefault(require("../theme"));

require("./style.css");

var cssId = 'i-naoUI';

function InputNao(props) {
  return _react.default.createElement(_inputCore.default, (0, _extends2.default)({
    cssId: cssId
  }, props), _react.default.createElement("svg", {
    className: "".concat(cssId, "__underline"),
    width: "300%",
    height: "100%",
    viewBox: "0 0 1200 60",
    preserveAspectRatio: "none"
  }, _react.default.createElement("path", {
    d: "M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"
  })));
}

var theme = (0, _theme.default)(cssId);
exports.theme = theme;

var _default = (0, _react.memo)(InputNao);

exports.default = _default;