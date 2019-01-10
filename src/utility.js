const setCssProp = (prop, value) => document.documentElement.style.setProperty(prop, value);
const getCssVarName = (cssId, prop) => `--${cssId}-${prop}`;

export function initCssVariables(cssIdVariable) {

  const cssVariables = new Map([
    ['activeColor', null],
    ['hoverColor', null],
    ['mainColor', null],
  ]);

  return function (objProps) {

    for (const prop in objProps) {
      if (!!prop && objProps.hasOwnProperty(prop)) {
        const value = objProps[prop];
        const currValue = cssVariables.get(prop);

        if (value !== currValue) {
          const key = getCssVarName(cssIdVariable, prop);

          setCssProp(key, value);
          cssVariables.set(prop, value)
        }
      }
    }
  }
}


export function replaceColors(cssIdVariable) {

  return function (objProps) {
    for (const prop in objProps) {
      if (!!prop && objProps.hasOwnProperty(prop)) {
        const key = getCssVarName(cssIdVariable, prop);
        setCssProp(key, objProps[prop]);
      }
    }
  }
}


