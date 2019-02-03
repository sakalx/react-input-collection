import React, {useState} from 'react';

import {camelCaseToString, isColorValid, swapName} from './utility';
import './style.css';

// ['value', error]
const initStateValues = {
  activeTextColor: ['', null],
  focusColor: ['', null],
  hoverColor: ['', null],
  mainColor: ['', null],
};

function ExampleSection({
                          background,
                          Input,
                          theme,
                        }) {
  const [sectionState, setSectionState] = useState(initStateValues);


  const handleChangeValue = field => event => {
    event.persist();

    setSectionState(prevState => ({
      ...prevState,
      [field]: [event.target.value, prevState[field][1]],
    }));
  };

  const handleFocus = field => () => {
    setSectionState(prevState => ({
      ...prevState,
      [field]: [prevState[field][0], null],
    }));
  };

  const handleChangeTheme = setTheme => () => {
    Object.entries(sectionState).forEach(([prop, [value]]) => {
      const isValid = isColorValid(value);

      isValid && setTheme({[prop]: value});

      setSectionState(prevState => ({
        ...prevState,
        [prop]: [value, !isValid],
      }));
    });
  };
//style={{background}}
  return (
    <section>
      <h1>{swapName(Input.type.name).toUpperCase()} UI</h1>
      <div className={'wrap'}>
        {Object.keys(initStateValues).map((field, index) =>
          <Input
            key={String(index)}
            className={'input-field'}
            label={camelCaseToString(field)}
            placeholder='#hex color'
            onChange={handleChangeValue(field)}
            onFocus={handleFocus(field)}
            value={sectionState[field][0]}
            error={sectionState[field][1]}
          />
        )}
      </div>
      <button onClick={handleChangeTheme(theme)}>
        CHANGE THEME
      </button>
      <div className={'background'} style={{background}}/>
    </section>
  )
}

export default ExampleSection