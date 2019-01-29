import React, {useRef, memo} from 'react';

import InputCore from '../../input-core'
import setUpTheme, {setCssProp} from '../../theme';
import './style.css';


const cssId = 'i-sodaUI';

function InputSodaUI(props) {

  const handleRippleEffect = ({nativeEvent}) => {
    // TODO: invoke this only when has not clicked before
    const middleOfRect = nativeEvent.target.offsetWidth / 2;
    const top = nativeEvent.offsetY - middleOfRect + 'px';
    const left = nativeEvent.offsetX - middleOfRect + 'px';

    setCssProp(`--${cssId}-ripple-top`, top);
    setCssProp(`--${cssId}-ripple-left`, left);
  };

  return (
    <InputCore cssId={cssId} onClick={handleRippleEffect} {...props}>
      <span className={`${cssId}__ripple`}/>
    </InputCore>
  )
}

export const theme = setUpTheme(cssId);
export default memo(InputSodaUI);