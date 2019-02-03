import React, {memo} from 'react';

import InputCore from '../input-core'
import setUpTheme from '../theme';
import './style.css';


const cssId = 'i-minoruUI';

function InputMinoru({label, ...rest}) {
  const labelTitle = (() =>
    <span className={`${cssId}__label--title`}>{label}</span>)();

  return (
    <InputCore cssId={cssId} label={labelTitle} {...rest}>
      <hr className={`${cssId}__underline`}/>
    </InputCore>
  )
}

export const theme = setUpTheme(cssId);
export default memo(InputMinoru);