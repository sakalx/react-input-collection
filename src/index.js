import React from 'react';
import PropTypes from 'prop-types';

import './style.css';


const cssVariables = new Map([
  ['--i-mUI-color-active', null],
  ['--i-mUI-color-hover', null],
  ['--i-mUI-color-main', null],
]);

const changeCssVar = (ref, key, value) => {
  const currValue = cssVariables.get(key);

  if (value !== currValue) {
    const setCssVar = () => ref.current.style.setProperty(key, value);

    setTimeout(setCssVar, 0);
    cssVariables.set(key, value);
  }
};

function InputMUI({
                    activeColor = null,
                    hoverColor = null,
                    mainColor = null,
                    className = '',
                    style,
                    inputStyle,
                    underLineStyle,
                    labelStyle,
                    label = '',
                    ...rest
                  }) {
  let refInputMUI = React.createRef();

  !!activeColor && changeCssVar(refInputMUI, '--i-mUI-color-active', activeColor);
  !!hoverColor && changeCssVar(refInputMUI, '--i-mUI-color-hover', hoverColor);
  !!mainColor && changeCssVar(refInputMUI, '--i-mUI-color-main', mainColor);

  return (
    <fieldset className={`i-mUI ${className}`} style={style} ref={refInputMUI}>
      <input className='i-mUI__input' style={inputStyle} {...rest}/>
      <hr className='i-mUI__hr' style={underLineStyle}/>
      <label className='i-mUI__label' style={labelStyle}>{label}</label>
    </fieldset>
  )
}

export default InputMUI;

InputMUI.propTypes = {
  activeColor: PropTypes.string,
  hoverColor: PropTypes.string,
  mainColor: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  inputStyle: PropTypes.object,
  underLineStyle: PropTypes.object,
  labelStyle: PropTypes.object,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
