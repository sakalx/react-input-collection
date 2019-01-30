import React, {memo} from 'react';

import InputCore from '../../input-core'
import setUpTheme from '../../theme';
import './style.css';


const cssId = 'i-madokaUI';

function InputMadoka(props) {
  return (
    <InputCore cssId={cssId} {...props}>
      <svg
        className={`${cssId}__underline`}
        preserveAspectRatio='none'
        viewBox='0 0 400 45'
        width='100%' height='100%'
      >
        <rect height='100%' width='100%'/>
      </svg>
    </InputCore>
  )
}

export const theme = setUpTheme(cssId);
export default memo(InputMadoka);