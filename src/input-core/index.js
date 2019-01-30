import React, {useRef, useLayoutEffect} from 'react';
import PropTypes from 'prop-types';

import handleErrorUI from '../utility/handle-error-ui';
import './style.css';

function InputCore({
                     children,
                     className = '',
                     cssId = '',
                     error = null,
                     inputStyle,
                     label = '',
                     labelStyle,
                     onFocus,
                     style,
                     ...rest
                   }) {
  const errElement = useRef(null);

  useLayoutEffect(() => {
    handleErrorUI(errElement, error);
  },[error]);


  const handleFocus = event => {
    handleErrorUI(errElement, null);
    !!onFocus && onFocus(event)
  };

  return (
    <fieldset className={`${cssId} ${className}`} style={style}>
      <input
        className={`${cssId}__input`}
        onFocus={handleFocus}
        style={inputStyle}
        {...rest}
      />
      <label className={`${cssId}__label`} style={labelStyle}>
        {label}
      </label>
      {children}
      <span className='errUI' ref={errElement}/>
    </fieldset>
  )
}

export default InputCore;


InputCore.propTypes = {
  className: PropTypes.string,
  cssId: PropTypes.string,
  inputStyle: PropTypes.object,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    ),
  ]),
  labelStyle: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  style: PropTypes.object,
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
