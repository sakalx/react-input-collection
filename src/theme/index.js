const rootStyle = document.documentElement.style;

const getCssVarName = (cssId, prop) => `--${cssId}-${prop}`;
export const setCssProp = (prop, value) => rootStyle.setProperty(prop, value);

function setUpTheme(cssIdVariable) {

  return objProps => {
    for (const prop in objProps) {
      if (!!prop && objProps.hasOwnProperty(prop)) {
        const key = getCssVarName(cssIdVariable, prop);
        setCssProp(key, objProps[prop]);
      }
    }
  }
}

export default setUpTheme
