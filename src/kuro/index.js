import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import {initCssVariables, replaceColors} from '../utility';

const cssIdVariable = 'i-kuroUI';
const checkProp = initCssVariables(cssIdVariable);

function InputKuroUI({
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
    <fieldset className={`i-kuroUI ${className}`} style={style}>
      <input className='i-kuroUI__input' style={inputStyle} {...rest}/>
      <legend className='i-kuroUI__legend'>{label}</legend>
      <label className='i-kuroUI__label' style={labelStyle}>{label}</label>
      <hr className='i-kuroUI__underline'/>
    </fieldset>
  )
}

export const setColors = replaceColors(cssIdVariable);
export default InputKuroUI;

InputKuroUI.propTypes = {
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
