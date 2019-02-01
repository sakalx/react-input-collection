import React, {useState} from 'react';
import {render} from 'react-dom';

import InputAkira, {theme as akiraTheme} from '../../src/components/akira';
import InputIchiro, {theme as ichiroTheme} from '../../src/components/ichiro';
import InputJiro, {theme as jiroTheme} from '../../src/components/jiro';
import InputKuro, {theme as kuroTheme} from '../../src/components/kuro';
import InputMadoka, {theme as madokaTheme} from '../../src/components/madoka';
import InputMaterial, {theme as materialTheme} from '../../src/components/material';
import InputMinoru, {theme as minoruTheme} from '../../src/components/minoru';
import InputNao, {theme as naoTheme} from '../../src/components/nao';
import InputSoda, {theme as sodaTheme} from '../../src/components/soda';
import InputYoko, {theme as yokoTheme} from '../../src/components/yoko';

import {camelCaseToString, isColorValid} from './utility';

import './style.css';

const initStateValues = {
  activeTextColor: new Map([
    ['value', ''],
    ['error', null],
  ]),
  focusColor: new Map([
    ['value', ''],
    ['error', null],
  ]),
  hoverColor: new Map([
    ['value', ''],
    ['error', null],
  ]),
  mainColor: new Map([
    ['value', ''],
    ['error', null],
  ]),
};

function App() {
  const [akiraState, setAkiraState] = useState(initStateValues);
  const [ichiroState, setIchiroState] = useState(initStateValues);
  const [jiroState, setJiroState] = useState(initStateValues);
  const [kuroState, setKuroState] = useState(initStateValues);
  const [madokaState, setMadokaState] = useState(initStateValues);
  const [materialState, setMaterialState] = useState(initStateValues);
  const [minoruState, setMinoruState] = useState(initStateValues);
  const [naoState, setNaoState] = useState(initStateValues);
  const [sodaState, setSodaState] = useState(initStateValues);
  const [yokoState, setYokoState] = useState(initStateValues);

  const handleChangeValue = (prop, setState) => event => {
    event.persist();
    setState(prevState => {
      prevState[prop].set('value', event.target.value);
      return prevState;
    });
  };

  const handleFocus = (prop, setState) => () => {
    setState(prevState => {
      prevState[prop].set('error', null);
      return prevState;
    });
  };

  const handleChangeTheme = (state, setState) => () => {
    Object.entries(state).forEach(([prop, mapObj]) => {
      const value = mapObj.get('value');
      const isValid = isColorValid(value);

      isValid && akiraTheme({[prop]: value});
      setState(prevState => {
        prevState[prop].set('error', !isValid);
        return prevState;
      });
    });
  };

  return (
    <main>
      <section style={{background: '#8ee5ee'}}>
        <h1>AKIRA INPUT UI</h1>
        <div className={'wrap'}>
        {Object.keys(akiraState).map((prop, index) =>
          <InputAkira
            key={String(index)}
            label={camelCaseToString(prop)}
            placeholder='#hex color'
            error={akiraState[prop].get('error')}
            onChange={handleChangeValue(prop, setAkiraState)}
            onFocus={handleFocus(prop, setAkiraState)}
            value={akiraState[prop].get('value')}
            className={'input-field'}
          />

        )}
        </div>
        <button onClick={handleChangeTheme(akiraState, setAkiraState)}>
          CHANGE THEME
        </button>
      </section>
    </main>
  )
}

render(<App/>, document.getElementById("root"));
