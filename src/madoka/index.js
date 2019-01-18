import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import {initCssVariables, replaceColors} from '../utility';

const cssIdVariable = 'i-madokaUI';
const checkProp = initCssVariables(cssIdVariable);

function InputMadokaUI({
                         activeTextColor = null,
                         focusColor = null,
                         hoverColor = null,
                         mainColor = null,
                         className = '',
                         style,
                         inputStyle,
                         labelStyle,
                         label = '',
                         ...rest
                       }) {
  checkProp({activeTextColor, focusColor, hoverColor, mainColor});

  return (
    <fieldset className={`i-madokaUI ${className}`} style={style}>
      <input className='i-madokaUI__input' style={inputStyle} {...rest}/>
      <label className='i-madokaUI__label' style={labelStyle}>{label}</label>
      <svg
        className='i-madokaUI__underline'
        preserveAspectRatio='none'
        viewBox='0 0 400 45'
        width='100%' height='100%'
      >
        <rect height='100%' width='100%'/>
      </svg>
    </fieldset>
  )
}

export const setColors = replaceColors(cssIdVariable);
export default InputMadokaUI;

InputMadokaUI.propTypes = {
  activeTextColor: PropTypes.string,
  focusColor: PropTypes.string,
  hoverColor: PropTypes.string,
  mainColor: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  inputStyle: PropTypes.object,
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
