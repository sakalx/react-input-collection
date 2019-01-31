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

const initStateValues = {
  activeTextColor: '',
  focusColor: '',
  hoverColor: '',
  mainColor: '',
};

const initStateErrors = {
  activeTextColor: new Set(),
  focusColor: new Set(),
  hoverColor: new Set(),
  mainColor: new Set(),
};

const isColorValid = value =>
  /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(value);

function App() {
  const [akiraState, setInputAkira] = useState(initStateValues);
  const [ichiroState, setInputIchiro] = useState(initStateValues);
  const [jiroState, setInputJiro] = useState(initStateValues);
  const [kuroState, setInputKuro] = useState(initStateValues);
  const [madokaState, setInputMadoka] = useState(initStateValues);
  const [materialState, setInputMaterial] = useState(initStateValues);
  const [minoruState, setInputMinoru] = useState(initStateValues);
  const [naoState, setInputNao] = useState(initStateValues);
  const [sodaState, setInputSoda] = useState(initStateValues);
  const [yokoState, setInputYoko] = useState(initStateValues);
  const [errorState, setError] = useState(initStateErrors);

  const handleChangeValue = prop => event => {
    event.persist();
    setInputAkira(prevState => ({
        ...prevState,
        [prop]: event.target.value
      })
    );
  };


  const handleChangeTheme = componentName => () => {
    Object.entries(akiraState).forEach(([prop, value]) => {

      setError(prevErrState => {
        if (isColorValid(value)) {
          akiraTheme({[prop]: value});
          prevErrState[prop].delete(componentName);
          return prevErrState;
        } else {
          prevErrState[prop].add(componentName);
          return prevErrState;
        }
      });
    });
   // console.log(errorState);
  };

  return (
    <main>
      <fieldset>
        <legend>Change theme :</legend>
        <InputAkira
          value={akiraState.activeTextColor}
          onChange={handleChangeValue('activeTextColor')}
          label='Active text color'
          placeholder='#fff'
          error={errorState.activeTextColor.has('akira')}
        />
        <br/>
      {/*  <InputAkira
          value={akiraState.focusColor}
          onChange={handleChangeValue('focusColor')}
          label='Focus color'
          placeholder='#555'
        />*/}
        <button onClick={handleChangeTheme('akira')}>CHANGE</button>
      </fieldset>
    </main>
  )
}

render(<App/>, document.getElementById("root"));
