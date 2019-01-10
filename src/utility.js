export function initCssVariables(cssIdVariable) {

  const cssVariables = new Map([
    ['activeColor', null],
    ['hoverColor', null],
    ['mainColor', null],
  ]);

  return function (objProps) {

    for (const prop in objProps) {
      if (!!prop) {
        const value = objProps[prop];
        const currValue = cssVariables.get(prop);

        if (value !== currValue) {
          const cssVarKey = `--${cssIdVariable}-${prop}`;

          document.documentElement.style.setProperty(cssVarKey, value);
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
        const cssVarKey = `--${cssIdVariable}-${prop}`;
        document.documentElement.style.setProperty(cssVarKey, objProps[prop]);
      }
    }
  }
}


