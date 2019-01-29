import React, {memo} from 'react';
import PropTypes from 'prop-types';

import Wrap from '../../wraper'
import setUpTheme from '../../theme';
import './style.css';


const cssId = 'i-naoUI';

function InputNaoUI({
                      className,
                      style,
                      inputStyle,
                      labelStyle,
                      label = '',
                      error,
                      ...rest
                    }) {
  return (
    <Wrap
      className={className}
      cssId={cssId}
      error={error}
      style={style}
    >
      <input className={`${cssId}__input`} style={inputStyle} {...rest}/>
      <label className={`${cssId}__label`} style={labelStyle}>{label}</label>
      <svg
        className={`${cssId}__underline`}
        width='300%' height='100%'
        viewBox='0 0 1200 60'
        preserveAspectRatio='none'
      >
        <path
          d='M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0'/>
      </svg>
    </Wrap>
  )
}

export const theme = setUpTheme(cssId);
export default memo(InputNaoUI);

InputNaoUI.propTypes = {
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