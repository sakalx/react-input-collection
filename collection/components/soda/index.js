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

var _theme = _interopRequireWildcard(require("../../theme"));

require("./style.css");

var cssId = 'i-sodaUI';

function InputSoda(_ref) {
  var onClick = _ref.onClick,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["onClick"]);

  var handleRippleEffect = function handleRippleEffect(event) {
    !!onClick && onClick(event);
    var borderRadius = getComputedStyle(event.target).borderBottomLeftRadius;
    var hasRipple = parseInt(borderRadius) !== 0;
    if (hasRipple) return;
    var _event$nativeEvent = event.nativeEvent,
        target = _event$nativeEvent.target,
        offsetY = _event$nativeEvent.offsetY,
        offsetX = _event$nativeEvent.offsetX;
    var middleOfRect = target.offsetWidth / 2;
    var top = offsetY - middleOfRect + 'px';
    var left = offsetX - middleOfRect + 'px';
    (0, _theme.setCssProp)("--".concat(cssId, "-ripple-top"), top);
    (0, _theme.setCssProp)("--".concat(cssId, "-ripple-left"), left);
  };

  return _react.default.createElement(_inputCore.default, (0, _extends2.default)({
    cssId: cssId,
    onClick: handleRippleEffect
  }, rest), _react.default.createElement("span", {
    className: "".concat(cssId, "__ripple")
  }));
}

var theme = (0, _theme.default)(cssId);
exports.theme = theme;

var _default = (0, _react.memo)(InputSoda);

exports.default = _default;