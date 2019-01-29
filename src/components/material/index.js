import React, {memo} from 'react';
import PropTypes from 'prop-types';

import Wrap from '../../wraper'
import setUpTheme from '../../theme';
import './style.css';


const cssId = 'i-mUI';

function InputMUI({
                    className,
                    style,
                    inputStyle,
                    labelStyle,
                    label,
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
      <input className= {`${cssId}__input`} style={inputStyle} {...rest}/>
      <hr className={`${cssId}__underline`}/>
      <label className={`${cssId}__label`} style={labelStyle}>{label}</label>

    </Wrap>
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
