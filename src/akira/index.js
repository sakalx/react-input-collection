import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import {initCssVariables, replaceColors} from '../utility';

const cssIdVariable = 'i-akiraUI';
const checkProp = initCssVariables(cssIdVariable);

function InputAkiraUI({
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
    <fieldset className={`i-akiraUI ${className}`} style={style}>
      <input className='i-akiraUI__input' style={inputStyle} {...rest}/>
      <label className='i-akiraUI__label' style={labelStyle}>{label}</label>
    </fieldset>
  )
}

export const setColors = replaceColors(cssIdVariable);
export default InputAkiraUI;

InputAkiraUI.propTypes = {
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
