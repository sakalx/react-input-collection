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

var cssId = 'i-mUI';

function InputMaterial(props) {
  return _react.default.createElement(_inputCore.default, (0, _extends2.default)({
    cssId: cssId
  }, props), _react.default.createElement("hr", {
    className: "".concat(cssId, "__underline")
  }));
}

var theme = (0, _theme.default)(cssId);
exports.theme = theme;

var _default = (0, _react.memo)(InputMaterial);

exports.default = _default;