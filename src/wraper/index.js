import React, {useRef} from 'react';
import PropTypes from 'prop-types';

import useValidation, {handleErrorUI} from '../hooks/validation';

function Wrap({
                children,
                className = '',
                cssId = '',
                error = null,
                onClickWrap = null,
                style,
              }) {
  const errElement = useRef(null);
  useValidation(errElement, error);

  const handleClick = () => {
    handleErrorUI(errElement, null);
    onClickWrap && onClickWrap();
  };

  return (
    <fieldset
      className={`${cssId} ${className}`}
      style={style}
      onClick={handleClick}
    >
      {children}
      <span className='errUI' ref={errElement}/>
    </fieldset>
  )
}

export default Wrap;

Wrap.propTypes = {
  className: PropTypes.string,
  cssId: PropTypes.string,
  onClickWrap: PropTypes.func,
  style: PropTypes.object,
};
