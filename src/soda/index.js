import React, {memo}  from 'react';
import PropTypes from 'prop-types';

import './style.css';
import {initCssVariables, replaceColors} from '../utility';

const cssIdVariable = 'i-sodaUI';
const checkProp = initCssVariables(cssIdVariable);



const showRippleEffect = event => {
  const top = event.offsetY;
  const left = event.offsetX;
  const underline = event.target.previousElementSibling;

  underline.style.top = top - underline.offsetHeight / 2 + 'px';
  underline.style.left = left - underline.offsetHeight / 2  + 'px';
  underline.style.transform = 'scale(2)';
};

const handleClick = callBack => ({nativeEvent}) => {
  showRippleEffect(nativeEvent);
  !!callBack && callBack();
};

const handleFocusIn = callBack => ({nativeEvent}) => {
  const underline = nativeEvent.target.previousElementSibling;
  const rect = nativeEvent.target.getBoundingClientRect();

  underline.style.height = underline.style.width = Math.max(rect.width, rect.height) + 'px';
  showRippleEffect(nativeEvent);

  //
  !!callBack && callBack();
};


const handleFocusOut = callBack => ({target}) => {
  const underline = target.previousElementSibling;
  underline.style.transform = 'scale(0)';
  !!callBack && callBack();
};



function InputSodaUI({
                       activeTextColor = null,
                       focusColor = null,
                       hoverColor = null,
                       mainColor = null,
                       onBlur = null,
                       onClick = null,
                       onFocus = null,
                       className = '',
                       style,
                       inputStyle,
                       labelStyle,
                       label = '',
                       ...rest
                     }) {
  checkProp({activeTextColor, focusColor, hoverColor, mainColor});



  return (
    <fieldset className={`i-sodaUI ${className}`} style={style}>
      <span className='i-sodaUI__underline'/>
      <input
        className='i-sodaUI__input'
        onBlur={handleFocusOut(onBlur)}
        onClick={handleClick(onClick)}
        onFocus={handleFocusIn(onFocus)}
        style={inputStyle}
        {...rest}
      />
      <label className='i-sodaUI__label' style={labelStyle}>{label}</label>

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