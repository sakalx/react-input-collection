import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import {initCssVariables, replaceColors} from '../utility';

const cssIdVariable = 'i-naoUI';
const checkProp = initCssVariables(cssIdVariable);

function InputNaoUI({
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
    <fieldset className={`i-naoUI ${className}`} style={style}>
      <input className='i-naoUI__input' style={inputStyle} {...rest}/>
      <label className='i-naoUI__label' style={labelStyle}>{label}</label>
      <svg
        className='i-naoUI__underline'
        width='300%' height='100%'
        viewBox='0 0 1200 60'
        preserveAspectRatio='none'
      >
        <path
          d='M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0'/>
      </svg>
    </fieldset>
  )
}

export const setColors = replaceColors(cssIdVariable);
export default InputNaoUI;

InputNaoUI.propTypes = {
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