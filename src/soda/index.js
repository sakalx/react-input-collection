import React, {memo} from 'react';
import PropTypes from 'prop-types';

import './style.css';
import {initCssVariables, replaceColors, setCssProp} from '../utility';

const cssIdVariable = 'i-sodaUI';
const checkProp = initCssVariables(cssIdVariable);


const handleRippleEffect = ({nativeEvent}) => {
  // optional: invoke this only when ripple not exist
  const middleOfRect = nativeEvent.target.offsetWidth / 2;
  const top = nativeEvent.offsetY - middleOfRect + 'px';
  const left = nativeEvent.offsetX - middleOfRect + 'px';

  setCssProp('--i-sodaUI-ripple-top', top);
  setCssProp('--i-sodaUI-ripple-left', left);
};

function InputSodaUI({
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
    <fieldset
      className={`i-sodaUI ${className}`}
      style={style}
      onClick={handleRippleEffect}
    >
      <input className='i-sodaUI__input' style={inputStyle} {...rest}/>
      <label className='i-sodaUI__label' style={labelStyle}>{label}</label>
      <span className='i-sodaUI__ripple'/>
    </fieldset>
  )
}

export const setColors = replaceColors(cssIdVariable);
export default memo(InputSodaUI);

InputSodaUI.propTypes = {
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