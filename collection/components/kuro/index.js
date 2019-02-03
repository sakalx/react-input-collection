"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.theme = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _inputCore = _interopRequireDefault(require("../../input-core"));

var _theme = _interopRequireDefault(require("../../theme"));

require("./style.css");

var cssId = 'i-kuroUI';

function InputKuro(_ref) {
  var label = _ref.label,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["label"]);
  return _react.default.createElement(_inputCore.default, (0, _extends2.default)({
    cssId: cssId,
    label: label
  }, rest), _react.default.createElement("legend", {
    className: "".concat(cssId, "__legend")
  }, label), _react.default.createElement("hr", {
    className: "".concat(cssId, "__underline")
  }));
}

var theme = (0, _theme.default)(cssId);
exports.theme = theme;

var _default = (0, _react.memo)(InputKuro);

exports.default = _default;