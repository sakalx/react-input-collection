import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import {initCssVariables, replaceColors} from '../utility';

const cssIdVariable = 'i-ichiroUI';
const checkProp = initCssVariables(cssIdVariable);

function InputIchiroUI({
                         activeTextColor = null,
                         focusColor = null,
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
  checkProp({activeTextColor, focusColor, hoverColor, mainColor});

  return (
    <fieldset className={`i-ichiroUI ${className}`} style={style}>
      <input className='i-ichiroUI__input' style={inputStyle} {...rest}/>
      <hr className='i-ichiroUI__underline' style={underLineStyle}/>
      <label className='i-ichiroUI__label' style={labelStyle}>{label}</label>
    </fieldset>
  )
}

export const setColors = replaceColors(cssIdVariable);
export default InputIchiroUI;

InputIchiroUI.propTypes = {
  activeTextColor: PropTypes.string,
  focusColor: PropTypes.string,
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
