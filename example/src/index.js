import React, {useState} from 'react';
import {render} from 'react-dom';

import InputAkira, {theme as AkiraTheme} from '../../src/components/akira';
import InputIchiro, {theme as IchiroTheme} from '../../src/components/ichiro';
import InputJiro, {theme as JiroTheme} from '../../src/components/jiro';
import InputKuro, {theme as KuroTheme} from '../../src/components/kuro';
import InputMadoka, {theme as MadokaTheme} from '../../src/components/madoka';
import InputMaterial, {theme as MaterialTheme} from '../../src/components/material';
import InputMinoru, {theme as MinoruTheme} from '../../src/components/minoru';
import InputNao, {theme as NaoTheme} from '../../src/components/nao';
import InputSoda, {theme as SodaTheme} from '../../src/components/soda';
import InputYoko, {theme as YokoTheme} from '../../src/components/yoko';

const initialState = {
  value: '',
  error: null,
  disabled: false,
};

function App() {
  const [akiraState, setInputAkira] = useState(initialState);
  const [ichiroState, setInputIchiro] = useState(initialState);
  const [jiroState, setInputJiro] = useState(initialState);
  const [kuroState, setInputKuro] = useState(initialState);
  const [madokaState, setInputMadoka] = useState(initialState);
  const [materialState, setInputMaterial] = useState(initialState);
  const [minoruState, setInputMinoru] = useState(initialState);
  const [naoState, setInputNao] = useState(initialState);
  const [sodaState, setInputSoda] = useState(initialState);
  const [yokoState, setInputYoko] = useState(initialState);

  /*
  * TODO: each component should have
  * button DISABLED
  * button SUBMIT
  * button CHANGE THEME
  *
  * input fields:
  *   not valid
  *   valid
  *   regular
  *
  * inputs for select 4 theme colors:
  *   activeTextColor
  *   focusColor
  *   hoverColo
  *   mainColor
  * */
  return (
    <main>

    </main>
  )
}

render(<App/>, document.getElementById("root"));
