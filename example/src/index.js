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
      <ExampleSection background={'#afbbd5'} Input={InputAkira} theme={akiraTheme}/>
      <ExampleSection background={'#ffddd4'} Input={InputIchiro} theme={ichiroTheme}/>
      <ExampleSection background={'#cbe8e1'} Input={InputJiro} theme={jiroTheme}/>
      <ExampleSection background={'#ffe6d1'} Input={InputKuro} theme={kuroTheme}/>
      <ExampleSection background={'#e8cbd2'} Input={InputMadoka} theme={madokaTheme}/>
      <ExampleSection background={'#e2ceb4'} Input={InputMaterial} theme={materialTheme}/>
      <ExampleSection background={'#fbf9f9'} Input={InputMinoru} theme={minoruTheme}/>
      <ExampleSection background={'#97c3c3'} Input={InputNao} theme={naoTheme}/>
      <ExampleSection background={'#e8d7ea'} Input={InputSoda} theme={sodaTheme}/>
      <ExampleSection background={'#ffb5a1'} Input={InputYoko} theme={yokoTheme}/>
      <div className={'wallpaper'}/>
    </main>
  )
}

render(<App/>, document.getElementById('root'));
