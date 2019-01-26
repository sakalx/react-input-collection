import React, {useState, useRef, useMemo, memo} from 'react';
import PropTypes from 'prop-types';

import './style.css';
import {replaceColors, setCssProp} from '../utility';

export const setTheme = replaceColors('i-sodaUI');

const handleRippleEffect = ({nativeEvent}) => {
  // optional: invoke this only when ripple not exist
  const middleOfRect = nativeEvent.target.offsetWidth / 2;
  const top = nativeEvent.offsetY - middleOfRect + 'px';
  const left = nativeEvent.offsetX - middleOfRect + 'px';

  setCssProp('--i-sodaUI-ripple-top', top);
  setCssProp('--i-sodaUI-ripple-left', left);
};

function InputSodaUI({
                       className = '',
                       style,
                       inputStyle,
                       labelStyle,
                       label = '',
                       error = null,
                       ...rest
                     }) {

  const sodaInputRef = useRef(null);

  //const [currError, setCurrError] = useState(null);


  //
  // if (error !== currError) {
  //   setCurrError(error);
  //
  //   console.log(sodaInputRef);
  //
  //   const handleValidationUi = () =>
  //     sodaInputRef.current.classList.toggle('notValid');
  //
  //   //setTimeout(handleValidationUi, 0);
  // }


  useMemo(() => {

    switch (error) {
      case true:
        // handle remove UI isValid
        // handle show UI NotValid
        break;
      case false:
        // handle remove UI NotValid
        // handle show UI isValid
        break;
      default:
      // handle remove UI NotValid && UI isValid
    }


    const handleValidUi = () =>
      sodaInputRef.current.classList.toggle('notValid');


    setTimeout(handleValidUi, 0);
  }, [error]);


  return (
    <fieldset
      className={`i-sodaUI ${className}`}
      style={style}
      onClick={handleRippleEffect}
      ref={sodaInputRef}
    >
      <input className='i-sodaUI__input' style={inputStyle} {...rest}/>
      <label className='i-sodaUI__label' style={labelStyle}>{label}</label>
      <span className='i-sodaUI__ripple'/>
    </fieldset>
  )
}

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