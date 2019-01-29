import React, {useRef, memo} from 'react';
import PropTypes from 'prop-types';

import useValidation, {handleErrorUI} from '../hooks/validation';
import setUpTheme, {setCssProp} from '../theme';

import './style.css';


const cssId = 'i-sodaUI';

function InputSodaUI({
                       className = '',
                       style,
                       inputStyle,
                       labelStyle,
                       label = '',
                       error = null,
                       ...rest
                     }) {
  const errElement = useRef(null);
  useValidation(errElement, error);


  const handleRippleEffect = ({nativeEvent}) => {
    // TODO: invoke this only when has not clicked before
    const middleOfRect = nativeEvent.target.offsetWidth / 2;
    const top = nativeEvent.offsetY - middleOfRect + 'px';
    const left = nativeEvent.offsetX - middleOfRect + 'px';

    handleErrorUI(errElement, null);
    setCssProp(`--${cssId}-ripple-top`, top);
    setCssProp(`--${cssId}-ripple-left`, left);
  };

  return (
    <fieldset
      className={`${cssId} ${className}`}
      style={style}
      onClick={handleRippleEffect}
    >
      <input className={`${cssId}__input`} style={inputStyle} {...rest}/>
      <label className={`${cssId}__label`} style={labelStyle}>{label}</label>
      <span className={`${cssId}__ripple`}/>
      <span className='errUI' ref={errElement}/>
    </fieldset>
  )
}

export const theme = setUpTheme(cssId);
export default memo(InputSodaUI);

InputSodaUI.propTypes = {
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