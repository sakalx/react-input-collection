import React, {memo} from 'react';

import InputCore from '../../input-core'
import setUpTheme from '../../theme';
import './style.css';


const cssId = 'i-yokoUI';

function InputYokoUI(props) {
  return (
    <InputCore cssId={cssId} {...props}>
      <span className={`${cssId}__underline`}/>
    </InputCore>
  )
}

export const theme = setUpTheme(cssId);
export default memo(InputYokoUI);