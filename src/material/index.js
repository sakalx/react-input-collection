import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import {initCssVariables, replaceColors} from '../utility';

const cssIdVariable = 'i-mUI';
const checkProp = initCssVariables(cssIdVariable);

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
  checkProp({hoverColor, activeColor, mainColor});

  return (
    <fieldset className={`i-mUI ${className}`} style={style}>
      <input className='i-mUI__input' style={inputStyle} {...rest}/>
      <hr className='i-mUI__underline' style={underLineStyle}/>
      <label className='i-mUI__label' style={labelStyle}>{label}</label>
    </fieldset>
  )
}

export const setColors = replaceColors(cssIdVariable);
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
