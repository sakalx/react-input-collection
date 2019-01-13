import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import {initCssVariables, replaceColors} from '../utility';

const cssIdVariable = 'i-madokaUI';
const checkProp = initCssVariables(cssIdVariable);

function InputMadokaUI({
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
  checkProp({hoverColor, activeColor, mainColor});

  return (
    <fieldset className={`i-madokaUI ${className} input input--madoka`} style={style}>
      <input className='i-madokaUI__input' style={inputStyle} {...rest}/>
      <label className='i-madokaUI__label' style={labelStyle}>{label}</label>
      <svg
        className='i-madokaUI__underline'
        style={underLineStyle}
        width='100%' height='100%'
        viewBox='0 0 404 77'
        preserveAspectRatio='none'
      >
        <path d='m0,0l404,0l0,77l-404,0l0,-77z'/>
      </svg>
    </fieldset>
  )
}

export const setColors = replaceColors(cssIdVariable);
export default InputMadokaUI;

InputMadokaUI.propTypes = {
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
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    ),
  ]),
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    ),
  ]),
};
