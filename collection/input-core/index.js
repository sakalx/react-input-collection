"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utility = require("../utility");

require("./style.css");

function InputCore(_ref) {
  var children = _ref.children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$cssId = _ref.cssId,
      cssId = _ref$cssId === void 0 ? '' : _ref$cssId,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$error = _ref.error,
      error = _ref$error === void 0 ? null : _ref$error,
      inputStyle = _ref.inputStyle,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? '' : _ref$label,
      labelStyle = _ref.labelStyle,
      style = _ref.style,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "cssId", "disabled", "error", "inputStyle", "label", "labelStyle", "style"]);
  var errElement = (0, _react.useRef)(null);
  (0, _react.useLayoutEffect)(function () {
    return (0, _utility.handleDisabledUI)(errElement, disabled);
  }, [disabled]);
  (0, _react.useLayoutEffect)(function () {
    return (0, _utility.handleErrorUI)(errElement, error);
  }, [error]);
  return _react.default.createElement("fieldset", {
    className: "".concat(cssId, " ").concat(className),
    style: style
  }, _react.default.createElement("input", (0, _extends2.default)({
    className: "".concat(cssId, "__input"),
    disabled: disabled,
    style: inputStyle
  }, rest)), _react.default.createElement("label", {
    className: "".concat(cssId, "__label"),
    style: labelStyle
  }, label), children, _react.default.createElement("span", {
    className: "errUI",
    ref: errElement
  }));
}

var _default = InputCore;
exports.default = _default;
InputCore.propTypes = {
  className: _propTypes.default.string,
  cssId: _propTypes.default.string,
  inputStyle: _propTypes.default.object,
  label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]))]),
  labelStyle: _propTypes.default.object,
  onChange: _propTypes.default.func.isRequired,
  onClick: _propTypes.default.func,
  style: _propTypes.default.object,
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]))]),
  defaultValue: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]))])
};