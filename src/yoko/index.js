import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import {initCssVariables, replaceColors} from '../utility';

const cssIdVariable = 'i-yokoUI';
const checkProp = initCssVariables(cssIdVariable);

function InputYokoUI({
                       activeTextColor = null,
                       focusColor = null,
                       hoverColor = null,
                       mainColor = null,
                       className = '',
                       style,
                       inputStyle,
                       labelStyle,
                       underLineStyle,
                       label = '',
                       ...rest
                     }) {
  checkProp({activeTextColor, focusColor, hoverColor, mainColor});

  return (
    <fieldset className={`i-yokoUI ${className}`} style={style}>
      <input className='i-yokoUI__input' style={inputStyle} {...rest}/>
      <label className='i-yokoUI__label' style={labelStyle}>{label}</label>
      <span className='i-yokoUI__underline' style={underLineStyle}/>
    </fieldset>
  )
}

export const setColors = replaceColors(cssIdVariable);
export default InputYokoUI;

InputYokoUI.propTypes = {
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
