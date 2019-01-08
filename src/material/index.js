import React from 'react';
import PropTypes from 'prop-types';

import './style.css';


const cssVariables = new Map([
  ['--i-mUI-color-active', null],
  ['--i-mUI-color-hover', null],
  ['--i-mUI-color-main', null],
]);

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
  const refInputMUI = React.createRef();

  const changeCssVar = (key, value) => {
    const currValue = cssVariables.get(key);

    if (value !== currValue) {
      const setCssVar = () => refInputMUI.current.style.setProperty(key, value);

      setTimeout(setCssVar, 0);
      cssVariables.set(key, value);
    }
  };

  !!activeColor && changeCssVar('--i-mUI-color-active', activeColor);
  !!hoverColor && changeCssVar('--i-mUI-color-hover', hoverColor);
  !!mainColor && changeCssVar('--i-mUI-color-main', mainColor);

  return (
    <fieldset className={`i-mUI ${className}`} style={style} ref={refInputMUI}>
      <input className='i-mUI__input' style={inputStyle} {...rest}/>
      <hr className='i-mUI__underline' style={underLineStyle}/>
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
