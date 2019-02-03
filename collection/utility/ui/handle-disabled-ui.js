"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function handleDisabledUI(_ref, disabled) {
  var current = _ref.current;
  disabled ? current.parentElement.classList.add('input-disabled') : current.parentElement.classList.remove('input-disabled');
}

var _default = handleDisabledUI;
exports.default = _default;