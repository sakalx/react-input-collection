import React, {memo} from 'react';

import InputCore from '../../input-core'
import setUpTheme from '../../theme';
import './style.css';


const cssId = 'i-akiraUI';

function InputAkira(props) {
  return (
    <InputCore cssId={cssId} {...props}/>
  )
}

export const theme = setUpTheme(cssId);
export default memo(InputAkira);