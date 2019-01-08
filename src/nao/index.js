import React from 'react';
import PropTypes from 'prop-types';

import './style.css';


const cssVariables = new Map([
  ['--i-naoUI-color-active', null],
  ['--i-naoUI-color-hover', null],
  ['--i-naoUI-color-main', null],
]);

function InputNao({
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
  const refInputNaoUI = React.createRef();

  const changeCssVar = (key, value) => {
    const currValue = cssVariables.get(key);

    if (value !== currValue) {
      const setCssVar = () => refInputNaoUI.current.style.setProperty(key, value);

      setTimeout(setCssVar, 0);
      cssVariables.set(key, value);
    }
  };

  !!activeColor && changeCssVar('--i-naoUI-color-active', activeColor);
  !!hoverColor && changeCssVar('--i-naoUI-color-hover', hoverColor);
  !!mainColor && changeCssVar('--i-naoUI-color-main', mainColor);

  return (

    <fieldset className={`i-naoUI ${className}`} style={style} ref={refInputNaoUI}>
      <input className='i-naoUI__input' style={inputStyle} {...rest}/>
      <label className='i-naoUI__label' style={labelStyle}>{label}</label>
      <svg
        className='i-naoUI__underline'
        style={underLineStyle}
        width='300%' height='100%'
        viewBox='0 0 1200 60'
        preserveAspectRatio='none'
      >
        <path d='M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0'/>
      </svg>
    </fieldset>
  )
}

export default InputNao;

InputNao.propTypes = {
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