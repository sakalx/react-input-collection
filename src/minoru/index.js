import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import {initCssVariables, replaceColors} from '../utility';

const cssIdVariable = 'i-minoruUI';
const checkProp = initCssVariables(cssIdVariable);

function InputMinoruUI({
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
    <fieldset className={`i-minoruUI ${className}`} style={style}>
      <input className='i-minoruUI__input' style={inputStyle} {...rest}/>
      <label className='i-minoruUI__label' style={labelStyle}>
        <span>{label}</span>
      </label>
      <hr className='i-minoruUI__underline'/>
    </fieldset>
  )
}

export const setColors = replaceColors(cssIdVariable);
export default InputMinoruUI;

InputMinoruUI.propTypes = {
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
