import React from 'react';
import {render} from 'react-dom';

import InputAkira, {theme as akiraTheme} from '../../collection/akira';
import InputIchiro, {theme as ichiroTheme} from '../../collection/ichiro';
import InputJiro, {theme as jiroTheme} from '../../collection/jiro';
import InputKuro, {theme as kuroTheme} from '../../collection/kuro';
import InputMadoka, {theme as madokaTheme} from '../../collection/madoka';
import InputMaterial, {theme as materialTheme} from '../../collection/material';
import InputMinoru, {theme as minoruTheme} from '../../collection/minoru';
import InputNao, {theme as naoTheme} from '../../collection/nao';
import InputSoda, {theme as sodaTheme} from '../../collection/soda';
import InputYoko, {theme as yokoTheme} from '../../collection/yoko';

import ExampleSection from './ExampleSection';


function App() {
  return (
    <main>
      <ExampleSection title={'AKIRA'} background={'#afbbd5'} Input={InputAkira} theme={akiraTheme}/>
      <ExampleSection title={'ICHIRO'} background={'#ffddd4'} Input={InputIchiro} theme={ichiroTheme}/>
      <ExampleSection title={'JIRO'} background={'#cbe8e1'} Input={InputJiro} theme={jiroTheme}/>
      <ExampleSection title={'KURO'} background={'#ffe6d1'} Input={InputKuro} theme={kuroTheme}/>
      <ExampleSection title={'MADOKA'} background={'#e8cbd2'} Input={InputMadoka} theme={madokaTheme}/>
      <ExampleSection title={'MATERIAL'} background={'#e2ceb4'} Input={InputMaterial} theme={materialTheme}/>
      <ExampleSection title={'MINORU'} background={'#fbf9f9'} Input={InputMinoru} theme={minoruTheme}/>
      <ExampleSection title={'NAO'} background={'#97c3c3'} Input={InputNao} theme={naoTheme}/>
      <ExampleSection title={'SODA'} background={'#e8d7ea'} Input={InputSoda} theme={sodaTheme}/>
      <ExampleSection title={'YOKO'} background={'#ffb5a1'} Input={InputYoko} theme={yokoTheme}/>
      <div className={'wallpaper'}/>
    </main>
  )
}

render(<App/>, document.getElementById('root'));
