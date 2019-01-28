import React, {useRef, memo} from 'react';
import PropTypes from 'prop-types';

import useValidation, {handleErrorUI} from '../utility2/validation-hook';
import setUpTheme from '../utility2/theme';

import './style.css';


const cssId = 'i-mUI';

function InputMUI({
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

  const handleClick = () => {
    handleErrorUI(errElement, null);
  };

  return (
    <fieldset
      className={`${cssId} ${className}`}
      style={style}
      onClick={handleClick}
    >
      <input className= {`${cssId}__input`} style={inputStyle} {...rest}/>
      <hr className={`${cssId}__underline`}/>
      <label className={`${cssId}__label`} style={labelStyle}>{label}</label>
      <span className='errUI' ref={errElement}/>
    </fieldset>
  )
}

export const theme = setUpTheme(cssId);
export default memo(InputMUI);

InputMUI.propTypes = {
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
