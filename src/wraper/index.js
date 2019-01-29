import React, {useRef} from 'react';
import PropTypes from 'prop-types';

import useValidation, {handleErrorUI} from '../hooks/validation';
import './style.css';

function InputCore({
                     children,
                     className = '',
                     cssId = '',
                     error = null,
                     inputStyle,
                     label = '',
                     labelStyle,
                     onClick = null,
                     style,
                     ...rest
                   }) {
  const errElement = useRef(null);
  useValidation(errElement, error);

  const handleClick = () => {
    handleErrorUI(errElement, null);
    onClick && onClick();
  };

  return (
    <fieldset
      className={`${cssId} ${className}`}
      style={style}
      onClick={handleClick}
    >
      <input
        className={`${cssId}__input`}
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
  label: PropTypes.string,
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
