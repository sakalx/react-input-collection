import React from 'react';
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

import ExampleSection from './ExampleSection';


function App() {
  return (
    <main>
      <ExampleSection Input={InputAkira} theme={akiraTheme}/>
      <ExampleSection Input={InputIchiro} theme={ichiroTheme}/>
      <ExampleSection Input={InputJiro} theme={jiroTheme}/>
      <ExampleSection Input={InputKuro} theme={kuroTheme}/>
      <ExampleSection Input={InputMadoka} theme={madokaTheme}/>
      <ExampleSection Input={InputMaterial} theme={materialTheme}/>
      <ExampleSection Input={InputMinoru} theme={minoruTheme}/>
      <ExampleSection Input={InputNao} theme={naoTheme}/>
      <ExampleSection Input={InputSoda} theme={sodaTheme}/>
      <ExampleSection Input={InputYoko} theme={yokoTheme}/>
    </main>
  )
}

render(<App/>, document.getElementById('root'));
