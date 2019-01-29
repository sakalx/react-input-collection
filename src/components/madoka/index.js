import React, {memo} from 'react';
import PropTypes from 'prop-types';

import Wrap from '../../wraper'
import setUpTheme from '../../theme';
import './style.css';


const cssId = 'i-madokaUI';

function InputMadokaUI({
                         className,
                         style,
                         inputStyle,
                         labelStyle,
                         label = '',
                         error,
                         rest
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
        preserveAspectRatio='none'
        viewBox='0 0 400 45'
        width='100%' height='100%'
      >
        <rect height='100%' width='100%'/>
      </svg>
    </Wrap>
  )
}

export const theme = setUpTheme(cssId);
export default memo(InputMadokaUI);

InputMadokaUI.propTypes = {
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
