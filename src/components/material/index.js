import React, {memo} from 'react';

import InputCore from '../../input-core'
import setUpTheme from '../../theme';
import './style.css';


const cssId = 'i-mUI';

function InputMaterial(props) {
  return (
    <InputCore cssId={cssId} {...props}>
      <hr className={`${cssId}__underline`}/>
    </InputCore>
  )
}

export const theme = setUpTheme(cssId);
export default memo(InputMaterial);