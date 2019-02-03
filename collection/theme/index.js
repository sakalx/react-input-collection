"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setCssProp = void 0;
var rootStyle = document.documentElement.style;

var getCssVarName = function getCssVarName(cssId, prop) {
  return "--".concat(cssId, "-").concat(prop);
};

var setCssProp = function setCssProp(prop, value) {
  return rootStyle.setProperty(prop, value);
};

exports.setCssProp = setCssProp;

function setUpTheme(cssIdVariable) {
  return function (objProps) {
    for (var prop in objProps) {
      if (!!prop && objProps.hasOwnProperty(prop)) {
        var key = getCssVarName(cssIdVariable, prop);
        setCssProp(key, objProps[prop]);
      }
    }
  };
}

var _default = setUpTheme;
exports.default = _default;