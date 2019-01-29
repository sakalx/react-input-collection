import React, {memo} from 'react';

import InputCore from '../../input-core'
import setUpTheme, {setCssProp} from '../../theme';
import './style.css';


const cssId = 'i-sodaUI';

function InputSodaUI({onClick, ...rest}) {

  const handleRippleEffect = event => {
    !!onClick && onClick(event);

    const borderRadius = getComputedStyle(event.target).borderBottomLeftRadius;
    const focused = parseInt(borderRadius) !== 0;

    if (focused) return;
    const {nativeEvent: {target, offsetY, offsetX}} = event;

    const middleOfRect = target.offsetWidth / 2;
    const top = offsetY - middleOfRect + 'px';
    const left = offsetX - middleOfRect + 'px';

    setCssProp(`--${cssId}-ripple-top`, top);
    setCssProp(`--${cssId}-ripple-left`, left);
  };

  return (
    <InputCore cssId={cssId} onClick={handleRippleEffect} {...rest}>
      <span className={`${cssId}__ripple`}/>
    </InputCore>
  )
}

export const theme = setUpTheme(cssId);
export default memo(InputSodaUI);