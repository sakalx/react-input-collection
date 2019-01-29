import React, {memo} from 'react';

import Wrap from '../../wraper'
import setUpTheme from '../../theme';
import './style.css';


const cssId = 'i-mUI';

function InputMUI(props) {
  return (
    <Wrap cssId={cssId} {...props}>
      <hr className={`${cssId}__underline`}/>
    </Wrap>
  )
}

export const theme = setUpTheme(cssId);
export default memo(InputMUI);