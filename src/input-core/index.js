import React, {useRef, useLayoutEffect, useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import {handleDisabledUI, handleErrorUI} from '../utility';
import './style.css';

function InputCore({
                     children,
                     className = '',
                     cssId = '',
                     disabled = false,
                     error = null,
                     inputStyle,
                     label = '',
                     labelStyle,
                     style,
                     ...rest
                   }) {
  const errElement = useRef(null);

  useLayoutEffect(() => handleDisabledUI(errElement, disabled),[disabled]);
  useLayoutEffect(() => handleErrorUI(errElement, error),[error]);

  return (
    <fieldset className={`${cssId} ${className}`} style={style}>
      <input
        className={`${cssId}__input`}
        disabled={disabled}
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
