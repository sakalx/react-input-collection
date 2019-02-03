"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.theme = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _inputCore = _interopRequireDefault(require("../../input-core"));

var _theme = _interopRequireDefault(require("../../theme"));

require("./style.css");

var cssId = 'i-madokaUI';

function InputMadoka(props) {
  return _react.default.createElement(_inputCore.default, (0, _extends2.default)({
    cssId: cssId
  }, props), _react.default.createElement("svg", {
    className: "".concat(cssId, "__underline"),
    preserveAspectRatio: "none",
    viewBox: "0 0 400 45",
    width: "100%",
    height: "100%"
  }, _react.default.createElement("rect", {
    height: "100%",
    width: "100%"
  })));
}

var theme = (0, _theme.default)(cssId);
exports.theme = theme;

var _default = (0, _react.memo)(InputMadoka);

exports.default = _default;