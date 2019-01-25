const rootStyle = document.documentElement.style;


const getCssVarName = (cssId, prop) => `--${cssId}-${prop}`;
export const setCssProp = (prop, value) => rootStyle.setProperty(prop, value);

export function initCssVariables(cssIdVariable) {

  const cssVariables = new Map([
    ['activeTextColor', null],
    ['focusColor', null],
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