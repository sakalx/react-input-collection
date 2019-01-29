import React, {memo} from 'react';

import InputCore from '../../input-core'
import setUpTheme from '../../theme';
import './style.css';


const cssId = 'i-kuroUI';

function InputKuroUI({label, ...rest}) {
  return (
    <InputCore cssId={cssId} label={label} {...rest}>
      <legend className={`${cssId}__legend`}>{label}</legend>
      <hr className={`${cssId}__underline`}/>
    </InputCore>
  )
}

export const theme = setUpTheme(cssId);
export default memo(InputKuroUI);