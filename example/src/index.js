import React from 'react';
import {render} from 'react-dom';
import InputMaterial from '../../src/components/material';

import InputNao from '../../src/components/nao';
import InputMadoka from '../../src/components/madoka';
import InputJiro from '../../src/components/jiro';
import InputIchiro from '../../src/components/ichiro';
import InputAkira from '../../src/components/akira';
import InputYoko from '../../src/components/yoko';
import InputKuro from '../../src/components/kuro';
import InputMinoru from '../../src/components/minoru';
import InputSoda from '../../src/components/soda';


class App extends React.Component {

  state = {
    value: '',
    mainColor: 'red',
    error: false,
  };

  onChange = e => {
    this.setState({value: e.target.value});
  };

  changeColor = () => {
    this.setState({
      error: !this.state.error,
    });

  };

  render() {


    return (
      <div style={{marginTop: '22px'}}>
        <button onClick={this.changeColor}>change color</button>

        <InputMaterial
          onChange={this.onChange}
          value={this.state.value}
          label='InputMaterial'
          error={!this.state.error}
          placeholder={'test with placeholder'
          }
        />
        <br/><br/><br/>
        <InputNao label='Input Nao'
                  onChange={this.onChange}
                  value={this.state.value}
                  placeholder={'test with placeholder'}
                  error={this.state.error}
        />
        <br/><br/><br/>
        <InputMadoka onChange={this.onChange} value={this.state.value}
                     label='Input Madoka'
                     placeholder={'test with placeholder'}
                     error={this.state.error}
        />
        <br/><br/><br/>
        <InputJiro onChange={this.onChange}
                   value={this.state.value}
                   label='Input Jiro'
                   placeholder={'test with placeholder'}
                   error={!this.state.error}
        />
        <br/><br/><br/>
        <InputIchiro onChange={this.onChange}
                     value={this.state.value}
                     label='Input Ichiro'
                     placeholder={'placeholder'}
                     error={this.state.error}
        />
        <br/><br/><br/>
        <InputAkira onChange={this.onChange}
                    value={this.state.value}
                    label='Input Akira'
                    placeholder={'placeholder Akira'}
                    error={this.state.error}
        />
        <br/><br/><br/>

        <InputYoko onChange={this.onChange}
                   value={this.state.value}
                   label='InputYoko'
                   placeholder={'placeholder Yoko'}
                   error={!this.state.error}
        />
        <br/><br/><br/>
        <br/><br/><br/>
        <InputKuro onChange={this.onChange}
                   value={this.state.value}
                   label='Input Kuro'
                   placeholder={'placeholder Kuro'}
                   error={!this.state.error}
        />

        <br/><br/><br/>
        <br/><br/><br/>
        <InputMinoru onChange={this.onChange}
                     value={this.state.value}
                     label='Input Minoru'
                     placeholder={'placeholder Minoru'}
                     error={this.state.error}

        />
        <br/><br/><br/>
        <br/><br/><br/>


        <InputSoda
          onChange={this.onChange}
          value={this.state.value}
          error={this.state.error}
          label='Input Input Soda'
          placeholder={'placeholder Soda'}
        />
        <br/><br/><br/>
        <InputSoda
          onChange={this.onChange}
          value={this.state.value}
          error={false}
          label='Input Input Soda'
          placeholder={'placeholder Soda'}
        />
        <br/><br/><br/>
        <button onClick={this.changeColor}>change color</button>
      </div>
    )
  }
}

/*const styles = {
  wrap: {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
  },
  wallpaper: {
    position: 'absolute',
    zIndex: -1,
  },
  wallpaper__img: {
    height: '100vh',
    width: '100vw',
  },
  title: {
    alignSelf: 'center',
    fontSize: 34,
  },
  portrait__img: {
    border: '5px solid #fff',
    borderRadius: '3%',
    cursor: 'pointer',
    height: 'auto',
    width: '25vw',
  },
  portrait__title: {
    fontSize: 34,
    fontWeight: 500,
    textShadow: '-1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5)',
  },
  button__toggle: {
    alignSelf: 'flex-end',
    background: 'rgba(255,255, 255, 0)',
    borderRadius: 8,
    color: '#fff',
    cursor: 'pointer',
    fontSize: 24,
    margin: 15,
    outline: 'none',
    padding: 2,
    textShadow: '-1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5)',
    width: 125,
  },
};*/

render(<App/>, document.getElementById("root"));
